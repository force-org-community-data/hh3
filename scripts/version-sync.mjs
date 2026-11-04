// game.json's `version` is the source of truth for this repo's release version.
// package.json and package-lock.json are kept equal to it.
//   node scripts/version-sync.mjs           check; exit 1 when they differ
//   node scripts/version-sync.mjs --write   copy game.json's version into them
import { readFileSync, writeFileSync } from 'node:fs';

const file = (name) => new URL(`../${name}`, import.meta.url);
const read = (name) => readFileSync(file(name), 'utf8');

const version = JSON.parse(read('game.json')).version;
const pkgText = read('package.json');
const lockText = read('package-lock.json');
const lock = JSON.parse(lockText);
const lockIndent = lockText.match(/^( +|\t)"/m)?.[1] ?? 2;
const found = {
    'package.json': JSON.parse(pkgText).version,
    'package-lock.json': lock.version,
    'package-lock.json (packages[""])': lock.packages?.['']?.version,
};
const stale = Object.entries(found).filter(([, v]) => v !== version);

if (stale.length === 0) {
    console.log(`Versions in sync (${version}).`);
} else if (process.argv.includes('--write')) {
    // Replace only the top-level version line so the file's formatting is untouched.
    writeFileSync(
        file('package.json'),
        pkgText.replace(/^(\s*"version":\s*)"[^"]*"/m, `$1"${version}"`)
    );
    lock.version = version;
    if (lock.packages?.['']) lock.packages[''].version = version;
    writeFileSync(
        file('package-lock.json'),
        JSON.stringify(lock, null, lockIndent) + '\n'
    );
    console.log(
        `Set package.json and package-lock.json to ${version} (from game.json).`
    );
} else {
    for (const [name, v] of stale) {
        console.error(
            `${name} version (${v}) does not match game.json (${version}).`
        );
    }
    console.error('Run `npm run sync-version` after changing game.json.');
    process.exit(1);
}
