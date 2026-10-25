# Contributing

Thanks for helping. This repo holds rules data only; the checker lives in the [validator](https://github.com/force-org-community-data/fo_data_validator).

## Flow

1. Fork the repo (or branch, if you have write access).
2. Create a branch: `faction/<name>`, `fix/<what>`.
3. Make your change. See [docs/getting-started.md](docs/getting-started.md) and [docs/adding-a-faction.md](docs/adding-a-faction.md).
4. Run `npm run validate` until it reports `0 errors`.
5. Run `npx prettier --write <files you changed>`.
6. Open a pull request and fill in the template. Cite where each value comes from.
7. A reviewer checks it against [docs/review-checklist.md](docs/review-checklist.md). Fix feedback by pushing to the same branch.

## Rules

- **Original data entry only.** Enter rules values and short rule text the format needs. Do not paste rulebook paragraphs or art.
- **Cite your source** for rules values (book and page, or the published reference you checked). Before encoding a rule, compare it with the game's authoritative published reference and flag any conflict in the pull request rather than choosing silently.
- **Ids are slugs and never change** once merged: saved army lists point at them.
- **Keep diffs small.** Don't reformat or edit records unrelated to your change.
- By submitting, you certify you wrote the contribution yourself and have the right to submit it. This repository has no license, so no reuse rights are granted beyond GitHub's terms of service.

## Recommended branch protection (maintainers)

Template repositories don't copy settings. On `main`, enable:

- Require a pull request before merging, with at least one approving review
- Require status checks to pass: **`validate`**
- Block force pushes and deletion

## Conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
