# Review checklist

The validator proves the data is well formed. Reviewers check what it can't.

- [ ] CI is green (`validate`).
- [ ] **Rules accuracy.** Values match the cited source and the game's authoritative published reference. Conflicts between sources are flagged in the PR and resolved before merge.
- [ ] **Original entry.** No copied rulebook paragraphs; rule text is only what the format needs.
- [ ] **Ids.** Slugs, readable, consistent with neighbouring records. No existing id was renamed or reused.
- [ ] **Naming and labels** follow the game's own terms and the repo's existing style.
- [ ] **Costs and limits** are plausible against neighbouring units (typos like an extra zero pass validation).
- [ ] **Manifest.** New files are listed in `forceorg.json`; nothing listed is missing.
- [ ] **Scope.** The diff touches only what the PR describes; no drive-by reformatting.
