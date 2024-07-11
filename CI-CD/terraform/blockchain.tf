provider "aws" {
  region = "us-west-2"
}

resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
}

resource "aws_security_group" "blockchain_sg" {
  name_prefix = "blockchain-sg"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 30303
    to_port     = 30303
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 30303
    to_port     = 30303
    protocol    = "udp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "blockchain_node" {
  ami           = "ami-0c55b159cbfafe1f0" # Amazon Linux 2 AMI
  instance_type = "t2.medium"
  subnet_id     = aws_subnet.public.id
  security_groups = [aws_security_group.blockchain_sg.name]

  tags = {
    Name = "CryptoSentry-Blockchain-Node"
  }

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              amazon-linux-extras install docker -y
              service docker start
              usermod -a -G docker ec2-user
              docker run -d -p 30303:30303 -p 30303:30303/udp mydockerhubuser/cryptosentry-blockchain-node:latest
              EOF
}

resource "aws_elb" "blockchain_elb" {
  name               = "crypto-sentry-blockchain-elb"
  availability_zones = ["us-west-2a", "us-west-2b"]

  listener {
    instance_port     = 30303
    instance_protocol = "TCP"
    lb_port           = 30303
    lb_protocol       = "TCP"
  }

  health_check {
    target              = "TCP:30303"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
  }

  instances = [aws_instance.blockchain_node.id]

  tags = {
    Name = "CryptoSentry-Blockchain-ELB"
  }
}

output "blockchain_node_url" {
  value = aws_elb.blockchain_elb.dns_name
}
