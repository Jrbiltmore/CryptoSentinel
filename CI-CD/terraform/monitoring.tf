provider "aws" {
  region = "us-west-2"
}

# VPC
resource "aws_vpc" "monitoring_vpc" {
  cidr_block = "10.0.0.0/16"
}

# Subnet
resource "aws_subnet" "monitoring_subnet" {
  vpc_id                  = aws_vpc.monitoring_vpc.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
}

# Security Group for Monitoring Instances
resource "aws_security_group" "monitoring_sg" {
  vpc_id = aws_vpc.monitoring_vpc.id

  ingress {
    from_port   = 9090
    to_port     = 9090
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# EC2 Instance for Prometheus
resource "aws_instance" "prometheus" {
  ami           = "ami-0c55b159cbfafe1f0" # Amazon Linux 2 AMI
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.monitoring_subnet.id
  security_groups = [aws_security_group.monitoring_sg.name]

  tags = {
    Name = "CryptoSentry-Prometheus"
  }

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              amazon-linux-extras install docker -y
              service docker start
              usermod -a -G docker ec2-user
              docker run -d -p 9090:9090 prom/prometheus
              EOF
}

# EC2 Instance for Grafana
resource "aws_instance" "grafana" {
  ami           = "ami-0c55b159cbfafe1f0" # Amazon Linux 2 AMI
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.monitoring_subnet.id
  security_groups = [aws_security_group.monitoring_sg.name]

  tags = {
    Name = "CryptoSentry-Grafana"
  }

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              amazon-linux-extras install docker -y
              service docker start
              usermod -a -G docker ec2-user
              docker run -d -p 3000:3000 grafana/grafana
              EOF
}

# Outputs
output "prometheus_url" {
  value = aws_instance.prometheus.public_dns
}

output "grafana_url" {
  value = aws_instance.grafana.public_dns
}
