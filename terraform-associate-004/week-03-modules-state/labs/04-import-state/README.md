# Lab 04 — Import and state CLI

**Objectives:** 7a, 7b  
**Time:** 30 min

```bash
cd week-03-modules-state/labs/04-import-state
echo "I existed first" > imported.txt
terraform init
```

Do **not** apply yet. The file already exists. Import it.

```bash
terraform import local_file.existing "${PWD}/imported.txt"
terraform state list
terraform state show local_file.existing
terraform plan
```

Plan should be a no-op (or only whitespace/permission noise). If it wants to replace, the `filename` in config does not match the import ID. Fix the path.

Inspect:

```bash
terraform state list
terraform state show local_file.existing
```

Then:

```bash
terraform state rm local_file.existing
ls imported.txt
```

The file remains. `state rm` only untracks.

Re-import using the `import` block already in `import.tf` (uncomment if you commented it). `terraform plan` shows an import action.

**Exam takeaway:** import binds an ID to an address. Config must exist. `state rm` ≠ destroy. `state mv` / `moved` rename addresses.
