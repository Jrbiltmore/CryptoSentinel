# outputs.tf

output "api_url" {
  description = "The DNS name of the API Load Balancer"
  value       = aws_elb.api_elb.dns_name
}

output "blockchain_node_url" {
  description = "The DNS name of the Blockchain Node Load Balancer"
  value       = aws_elb.blockchain_elb.dns_name
}

output "prometheus_url" {
  description = "The public DNS of the Prometheus instance"
  value       = aws_instance.prometheus.public_dns
}

output "grafana_url" {
  description = "The public DNS of the Grafana instance"
  value       = aws_instance.grafana.public_dns
}

output "vpc_id" {
  description = "The ID of the VPC"
  value       = aws_vpc.main.id
}

output "public_subnet_id" {
  description = "The ID of the public subnet"
  value       = aws_subnet.public.id
}

output "monitoring_vpc_id" {
  description = "The ID of the monitoring VPC"
  value       = aws_vpc.monitoring_vpc.id
}

output "monitoring_subnet_id" {
  description = "The ID of the monitoring subnet"
  value       = aws_subnet.monitoring_subnet.id
}
