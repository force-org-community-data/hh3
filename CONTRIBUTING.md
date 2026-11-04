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

## Releasing (maintainers)

Players pin a release tag in the app (`github.com/<owner>/<repo>@v1.2.3`, see [docs/using-with-the-app.md](docs/using-with-the-app.md)).

1. Set the new version in `game.json`, then run `npm run sync-version` to copy it into `package.json` and `package-lock.json`: a **patch** for data fixes, a **minor** for added units, factions or options, a **major** for a change that breaks saved army lists (ids removed or renamed, a new game `version` range).
2. Add an entry to [CHANGELOG.md](CHANGELOG.md), commit, and merge to `main`.
3. Tagging is automatic: once `Validate data` passes on `main`, the [Release tags](.github/workflows/release-tags.yml) workflow tags the merged commit `vX.Y.Z` from `game.json` and moves the major tag (for example `v1`). If `vX.Y.Z` already exists it does nothing, so merges that don't bump the version add no tags. Don't push version tags by hand.

`version` in `game.json` is the source of truth: `package.json` and `package-lock.json` always equal it, and `npm run validate` (so CI) fails when they differ. Faction files match `game.json` with their `game.versions` range (currently `>=1.0.0 <2.0.0`), so a **major** bump also means updating that range in every faction and sub-faction file.

## Recommended branch protection (maintainers)

Template repositories don't copy settings. On `main`, enable:

- Require a pull request before merging, with at least one approving review
- Require status checks to pass: **`validate`**
- Block force pushes and deletion

## Conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
