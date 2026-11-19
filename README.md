# Horus Heresy 3rd Edition data for Force Org

Community-maintained rules data for **The Horus Heresy 3rd Edition**, read by the [Force Org](https://github.com/JosephMassie/force_org) army list builder. It covers the Legiones Astartes and all 18 Legions, the Solar Auxilia, the Mechanicum Taghmata, the Forces of the Emperor (Legio Custodes, Anathema Psykana and Divisio Assassinorum), the Imperialis Militia, the Questoris Familia, the Legio Titanicus, the Skitarii Conclaves, the Daemons of the Ruinstorm and the Cults Abominatio.

> **Unofficial.** This project is not affiliated with or endorsed by Games Workshop or Forge World.

## What's in the repo

```
forceorg.json     manifest: the game and the files it provides
game.json         the game's vocabulary and shared records
factions/         one file per faction
sub-factions/     one file per Legion, cohort or other sub-faction
```

Files not listed in `forceorg.json` are not loaded.

## Editing the data

You need [Node.js](https://nodejs.org) 22 or newer and git.

1. Clone the repo (or your fork) and install the validator:

    ```bash
    git clone https://github.com/force-org-community-data/hh3.git
    cd hh3
    npm ci
    ```

2. Edit the JSON files. The [data authoring guide](https://github.com/Force-Organization-Army-Builder/fo_data_validator/blob/v2.4.0/docs/data_authoring_guide.md) explains the file kinds, ids, costs, upgrades and expressions; [docs/editor-setup.md](docs/editor-setup.md) sets up schema hints in your editor.
3. Check your change until it reports `0 errors`:

    ```bash
    npm run validate
    ```

4. Format the files you changed:

    ```bash
    npx prettier --write <files you changed>
    ```

5. Open a pull request. CI runs the same check, and a failing pull request can't be merged. See [CONTRIBUTING.md](CONTRIBUTING.md) for the rules and how releases work.

## Using it in Force Org

Force Org loads this data by default: a new install starts with the source `github.com/force-org-community-data/hh3` at the `v1` tag, so every 1.x release reaches players on its own.

To try other data, open **Settings → Data sources** in the app and add the address with a tag or branch:

```
github.com/force-org-community-data/hh3@v1.0.0
github.com/force-org-community-data/hh3@my-branch
```

Pin a tag to stay on a fixed release, or use a branch to try a pull request's changes before it merges. A fork works the same way with its own address. If a file fails to load, the app refuses the whole source and shows the error; `npm run validate` finds it locally. More in [docs/using-with-the-app.md](docs/using-with-the-app.md).

## Docs

- [Getting started](docs/getting-started.md)
- [Adding a faction](docs/adding-a-faction.md)
- [Editor setup](docs/editor-setup.md)
- [Using this repo with the app](docs/using-with-the-app.md)
- [Review checklist](docs/review-checklist.md)
- Validator: [data authoring guide](https://github.com/Force-Organization-Army-Builder/fo_data_validator/blob/v2.4.0/docs/data_authoring_guide.md), [data schema spec](https://github.com/Force-Organization-Army-Builder/fo_data_validator/blob/v2.4.0/docs/specs/data_schema_spec_2026-10-17.md), [expression language spec](https://github.com/Force-Organization-Army-Builder/fo_data_validator/blob/v2.4.0/docs/specs/expression_language_spec_2026-10-17.md)
