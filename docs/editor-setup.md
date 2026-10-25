# Editor setup

## `$schema`

Each data file starts with a `$schema` line so editors give completion and inline errors. The app ignores it.

```json
{
    "$schema": "https://cdn.jsdelivr.net/gh/force-org-community-data/fo_data_validator@1/schema/faction.schema.json"
}
```

Files: `source-manifest`, `game`, `faction`, `sub-faction` (each `<name>.schema.json`). `@1` follows the newest `1.x.x` validator tag and changes only on a major bump; use an exact tag (`@1.0.0`) to freeze it.

Editors cache the schema, so a change can reach you late.

## VS Code

JSON files with a `$schema` key work with no setup. Format on save with the Prettier extension; the repo's `.prettierrc` and `.editorconfig` are picked up (4-space indent, single quotes).

## Run validation locally

```bash
npm ci
npm run validate
```

This is the same command CI runs, with the same pinned validator version.
