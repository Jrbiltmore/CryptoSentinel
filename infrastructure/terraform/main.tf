
provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "us_military_crypto" {
  bucket = "us-military-crypto"
  acl    = "private"
}

resource "aws_dynamodb_table" "us_military_crypto_table" {
  name           = "us-military-crypto-table"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "id"
  attribute {
    name = "id"
    type = "S"
  }
}

resource "aws_iam_role" "us_military_crypto_role" {
  name = "us_military_crypto_role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = "sts:AssumeRole",
        Effect = "Allow",
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "us_military_crypto_policy_attach" {
  role       = aws_iam_role.us_military_crypto_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonS3FullAccess"
}

resource "aws_instance" "us_military_crypto_instance" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  key_name      = "your-key-name"

  tags = {
    Name = "us-military-crypto-instance"
  }
}
