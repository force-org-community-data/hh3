# Adding a faction

1. **Create the file.** Copy `factions/warband.json` to `factions/<faction-id>.json`. The faction id is a slug (`[a-z0-9]+(-[a-z0-9]+)*`) and must equal the file's `id`.
2. **Point it at the game.** `game` holds the game's `id` and a version range, for example `{ "id": "<game-id>", "versions": ">=1.0.0 <2.0.0" }`, matching `game.json`.
3. **Add records.** `units`, `weapons`, `equipment`, `upgrades`, `specialRules`, `detachments`. Every record's `id` equals the key it sits under. Roles, unit types, stat templates and resources must be declared in `game.json` first; factions only refer to them.
4. **Check references.** A unit's `role`, `type`, `profiles[].template`, and the weapons and equipment it names must all exist. The validator reports dangling references.
5. **List the file.** Add its path to `factions` in `forceorg.json`. A file that isn't listed isn't loaded.
6. **Validate.** `npm run validate`.

## Sub-factions

A sub-faction modifies one faction (an order, regiment, sponsor). Put it in `sub-factions/<id>.json` with a `parent` naming the faction, and list it under `subFactions` in the manifest. Records that collide with the parent's replace it only when listed in `overrides`. Details: [authoring guide §6](https://github.com/force-org-community-data/fo_data_validator/blob/v1.0.0/docs/data_authoring_guide.md).

## Ids never change

Saved army lists refer to ids. Once merged, don't rename them; add new records instead.

## Further reading

- [Data authoring guide](https://github.com/force-org-community-data/fo_data_validator/blob/v1.0.0/docs/data_authoring_guide.md)
- [Data schema spec](https://github.com/force-org-community-data/fo_data_validator/blob/v1.0.0/docs/specs/data_schema_spec_2026-10-17.md)
- [Expression language spec](https://github.com/force-org-community-data/fo_data_validator/blob/v1.0.0/docs/specs/expression_language_spec_2026-10-17.md)
