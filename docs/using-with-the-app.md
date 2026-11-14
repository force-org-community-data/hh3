# Using this repo with Force Org

Force Org loads this repo by default: a new install starts with `github.com/force-org-community-data/hh3` at the moving `v1` tag, so each 1.x release reaches players without them doing anything. Players can switch it off, remove it, or add it back from settings.

To use another version:

1. Open **Settings → Data sources** in the app.
2. Add the address with a tag or branch:

```
github.com/force-org-community-data/hh3@v1.0.0
github.com/force-org-community-data/hh3@my-branch
```

A fork works the same way with its own address.

A tag or branch applies to the whole repo. Without a ref the default branch is used. Pin a tag for stable lists; use a branch to try a pull request's changes before it merges.

If a file fails to load, the whole source is refused with the error shown; run `npm run validate` locally to find it.

Extensions (`extends`) validate with the CLI but the app ignores them for now, and a source that provides no game is refused.
