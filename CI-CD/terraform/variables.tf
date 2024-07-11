# variables.tf

# AWS Region
variable "aws_region" {
  description = "The AWS region to deploy resources in"
  type        = string
  default     = "us-west-2"
}

# VPC CIDR Block
variable "vpc_cidr" {
  description = "CIDR block for the VPC"
  type        = string
  default     = "10.0.0.0/16"
}

# Public Subnet CIDR Block
variable "public_subnet_cidr" {
  description = "CIDR block for the public subnet"
  type        = string
  default     = "10.0.1.0/24"
}

# EC2 Instance Type for API
variable "api_instance_type" {
  description = "EC2 instance type for the API server"
  type        = string
  default     = "t2.micro"
}

# EC2 Instance Type for Blockchain Node
variable "blockchain_instance_type" {
  description = "EC2 instance type for the blockchain node"
  type        = string
  default     = "t2.medium"
}

# AMI ID for EC2 Instances
variable "ami_id" {
  description = "AMI ID for the EC2 instances"
  type        = string
  default     = "ami-0c55b159cbfafe1f0" # Amazon Linux 2 AMI
}

# Docker Image for API
variable "api_docker_image" {
  description = "Docker image for the API server"
  type        = string
  default     = "mydockerhubuser/cryptosentry-api:latest"
}

# Docker Image for Blockchain Node
variable "blockchain_docker_image" {
  description = "Docker image for the blockchain node"
  type        = string
  default     = "mydockerhubuser/cryptosentry-blockchain-node:latest"
}

# S3 Bucket Name for Logs
variable "s3_bucket_name" {
  description = "S3 bucket name for storing logs"
  type        = string
  default     = "cryptosentry-logs"
}
