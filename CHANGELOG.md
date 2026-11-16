# Changelog

## Unreleased

- Forces of the Emperor: the Legio Custodes (20 units, the five Convocation detachments, the Prefect and Hetaeron Guard Prime Advantages), Anathema Psykana (4 units) and Divisio Assassinorum (7 Assassins) factions.
- A list rule flags a Legio Custodes or Anathema Psykana contingent in an Army without the Loyalist Allegiance (their units already had a "Loyalist units only" alert each).
- The Clade Operative Prime Advantage in `game.json`: any Loyalist Primary Detachment's Prime Slot can add three Support slots filled from the Divisio Assassinorum.
- Uses validator 1.11.0: weapons with a ranged and a melee profile (Custodian spears, Galatus warblade, Verutum lance) are one weapon each; the Shield Trait sits on the Sentinel Guard profile only; vehicle weapons show where they are mounted (`defaultGear` `note`, upgrade `gearNote`).
- Mount notes for the Legiones Astartes, Solar Auxilia and Mechanicum vehicles (and the legion vehicles in sub-factions), taken from each datasheet's wargear and option text, and on the Pintle and Sponson weapon lists. The Stormhammer gains its co-axial multi-laser, and the Dracosan's "Melee weapon" upgrade is renamed "Vehicle equipment".
- Units the rules limit to one per Army lose the "0-1" prefix from their names, and a list rule now flags a second one: the Dark Angels Excindio Battle-automata, Blood Angels Ofanim Court (with or without Jump Packs, shared), Emperor's Children Sun Killer Squad, Imperial Fists Huscarl Terminator Retinue, Iron Warriors Dominator Cohort, Thousand Sons Numerologist Cabal, Raven Guard Deliverers Squad, and the Solar Auxilia Davinite Lodge Priest and Expeditionary Navigator.
- The Artificia unit type; the Dark Angels Excindio Battle-automata is Artificia, not Automata.
- Unit types carry their rules text in `description` (from the Wahapedia type tooltips; Vehicle points to the core Vehicle rules).
- Uses validator 1.12.0: the 16 sub-types used as profile tags (Champion, Command, Sergeant, Unique, Light, Heavy, Antigrav, Transport, Flyer, Super-heavy and the rest) are records in `game.json` `subTypes` with their rules text, so a misspelt tag or `tag:` reference now warns.
- Unit traits checked against every Wahapedia datasheet: the 169 Legiones Astartes units gain the Legiones Astartes trait, the Forces of the Emperor units their Loyalist trait and the Traitor Mechanicum units their Traitor trait (their allegiance alerts stay), and traits the page gives one model only (Numerologist Diviner and Telepath, Zardu Layak Psyker) move onto that model's profile.
- Uses validator 1.13.0: the Army's Allegiance gives its trait (Loyalist or Traitor) to every unit in the list that doesn't already carry the other one, as the datasheets' "[Allegiance]" trait says.
- Uses validator 1.14.0, which requires lowercase kebab-case ids: the Assault Squad's Charnabal sabre option id loses its trailing hyphen.
- Uses validator 2.0.0 (schema URLs move to `@2`). It rejects fractional counts and a fixed `min` above a fixed `max`, and adds warnings for unreadable versions, fields set where they are never read, and empty units or upgrades; this data already passed, so no records change.

## 1.0.0

- First tagged release: the Horus Heresy 3rd Edition data as of the data cleanup (legion wargear swaps reachable from their profiles, validator 1.7.0).
