# Lab 02 — Local backend path (stands in for remote)

**Objectives:** 6a, 6c  
**Time:** 25 min

You will not need S3. The mechanic is the same: backend config decides **where state lives**. Changing it requires `init -migrate-state`.

```bash
cd week-03-modules-state/labs/02-backend
terraform init
terraform apply
ls -la
```

State is `custom.tfstate`, not `terraform.tfstate`.

Change `path = "custom.tfstate"` to `path = "migrated.tfstate"`.

```bash
terraform init -migrate-state
ls -la
```

Terraform should offer to copy state to the new path.

**Remote (read only, do not apply unless you have a bucket):**

```hcl
terraform {
  backend "s3" {
    bucket         = "your-bucket"
    key            = "004/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "tf-locks"
    encrypt        = true
  }
}
```

**Exam takeaway:** local = file on disk. Remote = shared store + lock. Backend changes go through `init -migrate-state`, not a hand copy of JSON (unless you really know `state pull` / `state push`).
