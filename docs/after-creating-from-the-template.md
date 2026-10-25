# After creating a repo from the template

Template repositories copy files but not settings. Work through this list, then delete this file and the "Made from the template?" note in the README.

## Files

- [ ] **Rename the game.** Replace `<your game>`, `<owner>` and `<repo>` in `README.md`. Set `name`, `description` and `disclaimer` in `forceorg.json`. Rename `package.json` `name`.
- [ ] **Replace the placeholder source.** Edit `game.json` (id, name, vocabulary) and `factions/warband.json` (or delete it and add your own, updating `provides` in `forceorg.json`). Keep `npm run validate` green at every step. The placeholder uses the id `starter`; faction files refer to the game by id in their `game` field, so change both together.
- [ ] **License (optional).** Data repos made from this template have no license by default, like most community data repos. If you want one, add a `LICENSE` and update the contribution-rights line in `CONTRIBUTING.md`.
- [ ] **Set reviewers.** Fill in `.github/CODEOWNERS`.
- [ ] Update the `NOTICE` and README unofficial notice with the right rights holder.

## GitHub settings

- [ ] Branch protection on `main`: require a pull request and review, require the `validate` check, block force pushes (see CONTRIBUTING.md).
- [ ] Actions enabled, with workflow permissions set to read-only.
- [ ] Dependabot version updates enabled (it opens a PR when a new validator tag appears).
- [ ] Tag a first release once real data lands (for example `v0.1.0`) so players can pin it.

## Finish

- [ ] `npm ci && npm run validate` passes on a fresh clone.
- [ ] Delete this file and its links.
