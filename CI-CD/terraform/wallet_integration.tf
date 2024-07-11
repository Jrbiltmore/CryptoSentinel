provider "aws" {
  region = var.aws_region
}

# VPC
resource "aws_vpc" "wallet_vpc" {
  cidr_block = "10.0.0.0/16"
}

# Subnet
resource "aws_subnet" "wallet_subnet" {
  vpc_id                  = aws_vpc.wallet_vpc.id
  cidr_block              = "10.0.2.0/24"
  map_public_ip_on_launch = true
}

# Security Group for Wallet Service
resource "aws_security_group" "wallet_sg" {
  vpc_id = aws_vpc.wallet_vpc.id

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
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

# IAM Role for Wallet Service EC2 instances
resource "aws_iam_role" "wallet_ec2_role" {
  name = "wallet-ec2-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

# IAM Policy for S3 access (optional)
resource "aws_iam_policy" "wallet_s3_policy" {
  name        = "wallet-s3-access-policy"
  description = "Policy for S3 access from wallet service"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:PutObject"
        ]
        Resource = "*"
      }
    ]
  })
}

# Attach IAM Policy to Role
resource "aws_iam_role_policy_attachment" "wallet_ec2_role_s3_policy" {
  role       = aws_iam_role.wallet_ec2_role.name
  policy_arn = aws_iam_policy.wallet_s3_policy.arn
}

# IAM Instance Profile
resource "aws_iam_instance_profile" "wallet_ec2_instance_profile" {
  name = "wallet-ec2-instance-profile"
  role = aws_iam_role.wallet_ec2_role.name
}

# EC2 Instance for Wallet Service
resource "aws_instance" "wallet_instance" {
  ami           = var.ami_id
  instance_type = var.wallet_instance_type
  subnet_id     = aws_subnet.wallet_subnet.id
  security_groups = [aws_security_group.wallet_sg.name]
  iam_instance_profile = aws_iam_instance_profile.wallet_ec2_instance_profile.name

  tags = {
    Name = "CryptoSentry-Wallet-Service"
  }

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              amazon-linux-extras install docker -y
              service docker start
              usermod -a -G docker ec2-user
              docker run -d -p 80:80 -p 443:443 ${var.wallet_docker_image}
              EOF
}

# Load Balancer for Wallet Service
resource "aws_elb" "wallet_elb" {
  name               = "crypto-sentry-wallet-elb"
  availability_zones = ["us-west-2a", "us-west-2b"]

  listener {
    instance_port     = 80
    instance_protocol = "HTTP"
    lb_port           = 80
    lb_protocol       = "HTTP"
  }

  listener {
    instance_port     = 443
    instance_protocol = "HTTPS"
    lb_port           = 443
    lb_protocol       = "HTTPS"
  }

  health_check {
    target              = "HTTP:80/"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
  }

  instances = [aws_instance.wallet_instance.id]

  tags = {
    Name = "CryptoSentry-Wallet-ELB"
  }
}

# Outputs
output "wallet_service_url" {
  description = "The DNS name of the Wallet Service Load Balancer"
  value       = aws_elb.wallet_elb.dns_name
}
