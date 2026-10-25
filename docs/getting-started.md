# Getting started

From nothing to a validated change.

## 1. Install

- Install [Node.js](https://nodejs.org) 20 or newer (`node -v` to check) and git.
- Clone the repo (your fork, if you don't have write access) and install:

```bash
git clone <repo address>
cd <repo>
npm ci
```

## 2. Check that it works

```bash
npm run validate
```

You should see `1 game checked (.): 0 errors, 0 warnings`.

## 3. Make a change

The source is a set of JSON files described by `forceorg.json`. Start by opening `factions/warband.json` (the placeholder faction) and changing a unit's cost, then validate again. For a new faction see [adding-a-faction.md](adding-a-faction.md).

Read the [data authoring guide](https://github.com/force-org-community-data/fo_data_validator/blob/v1.0.0/docs/data_authoring_guide.md) before writing much: it covers the file kinds, ids, costs, upgrades and expressions.

## 4. Validate until clean

```bash
npm run validate
```

Each error is `file path: message`, where the path walks the JSON. Fix what it points at and repeat. Add `-- --json` for machine-readable output.

## 5. Format

```bash
npx prettier --write factions/my-faction.json
```

Only format files you changed.

## 6. Open a pull request

Branch, commit, push, and open a pull request. Fill in the template, citing your source. CI runs `npm run validate`; it must be green before merge. See [CONTRIBUTING.md](../CONTRIBUTING.md).

## 7. Try it in the app

Add this repo (or your branch, as `github.com/<owner>/<repo>@<branch>`) as a source. See [using-with-the-app.md](using-with-the-app.md).
