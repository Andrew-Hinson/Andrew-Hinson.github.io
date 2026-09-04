terraform {
  required_version = ">= 1.12.0"
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.5"
    }
  }
}

resource "local_file" "existing" {
  filename = "${path.module}/imported.txt"
  content  = "I existed first\n"
}
