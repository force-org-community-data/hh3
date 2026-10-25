# <your game> data for Force Org

Community-maintained rules data for **<your game>**, in the format read by the Force Org list builder. This repository is one data source: `forceorg.json` at the root lists the game and the faction files it provides.

> **Unofficial.** This project is not affiliated with or endorsed by Games Workshop or any other publisher. Contributions must be original data entry of rules values, not copied rulebook text beyond what the data format needs.

> **Made from the template?** Work through [docs/after-creating-from-the-template.md](docs/after-creating-from-the-template.md) first, then delete it and this note. The data currently in the repo is a placeholder.

## Create a new data repo from this template

This repository is a GitHub template. To start a data repo for a game:

1. On GitHub, open this repository and click **Use this template**, then **Create a new repository**. Pick the owner and a name (for example `fo_data_<game>`), and choose Public so the app and the jsDelivr schema URLs can reach it. Leave "Include all branches" off.
   Or with the GitHub CLI:

    ```bash
    gh repo create <owner>/<new-repo> --template force-org-community-data/game_template --public --clone
    ```

2. Clone it (the CLI command above already does) and run `npm ci && npm run validate`. It should report `0 errors`; the placeholder data is valid from day one.
3. Follow [docs/after-creating-from-the-template.md](docs/after-creating-from-the-template.md): rename the game, replace the placeholder source, set reviewers, and re-apply the GitHub settings (branch protection, Actions, Dependabot), because templates copy files but not settings.
4. Delete that checklist and this section from the new repo's README.

## Use this data in Force Org

In the app, open Sources in settings and add this repository's address:

```
github.com/<owner>/<repo>
github.com/<owner>/<repo>@<tag-or-branch>
```

Pin a tag (`@v1.0.0`) to stay on a fixed release, or leave the ref off to follow the default branch. Nothing is added to the app by default; every player adds the sources they want.

## Contribute

1. Read [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/getting-started.md](docs/getting-started.md).
2. Edit or add files, run `npm run validate` until it reports `0 errors`.
3. Open a pull request. CI runs the same check and a failing pull request cannot be merged.

## Docs

- [Getting started](docs/getting-started.md)
- [Adding a faction](docs/adding-a-faction.md)
- [Editor setup](docs/editor-setup.md)
- [Using this repo with the app](docs/using-with-the-app.md)
- [Review checklist](docs/review-checklist.md)
- Validator: [data authoring guide](https://github.com/force-org-community-data/fo_data_validator/blob/v1.0.0/docs/data_authoring_guide.md), [data schema spec](https://github.com/force-org-community-data/fo_data_validator/blob/v1.0.0/docs/specs/data_schema_spec_2026-10-17.md), [expression language spec](https://github.com/force-org-community-data/fo_data_validator/blob/v1.0.0/docs/specs/expression_language_spec_2026-10-17.md)

## Shape of the repo

One source per repository. A repo holds one game, or a few closely associated games that share factions. Unrelated games belong in their own repos so each has its own release cadence, and one broken game cannot stop another from loading.

```
forceorg.json     manifest: lists the games and files provided
game.json         the game's vocabulary and shared records
factions/         one file per faction
sub-factions/     one file per sub-faction (optional)
```

Files not listed in `forceorg.json` are not loaded.

Extensions (`extends`: a source that adds to another source's game) validate with the CLI but are not loaded by the app yet.
