# Using this repo with Force Org

Force Org points at no data source by default. Players add the sources they want.

1. Open Sources in the app's settings.
2. Add the repo address:

```
github.com/<owner>/<repo>
```

3. To pin a version, add a tag or branch:

```
github.com/<owner>/<repo>@v1.0.0
github.com/<owner>/<repo>@my-branch
```

A tag or branch applies to the whole repo. Without a ref the default branch is used. Pin a tag for stable lists; use a branch to try a pull request's changes before it merges.

If a file fails to load, the whole source is refused with the error shown; run `npm run validate` locally to find it.

Extensions (`extends`) validate with the CLI but the app ignores them for now, and a source that provides no game is refused.
