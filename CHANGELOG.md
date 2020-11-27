# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


v4.0.0
------------------------------
*November 27, 2020*

### Changed
- Updated npm dependencies including bump of eslint to v7.
- Updated peer dependencies to accept ranges rather than fixed versions.
- Bumped minimum supported version of node to version 10+.
- Updated license year.

### Added
- `--report-unused-disable-directives` flag when linting to match the `eslint-config-airbnb-base` build scripts.
- Missing rule definitions.


v3.5.0
------------------------------
*November 20, 2020*

### Changed
- Ignore template literals in `indent` rule as this can [cause "Cannot read property 'range' of null" errors](https://github.com/babel/babel-eslint/issues/681#issuecomment-652333293).


v3.4.1
------------------------------
*April 4, 2020*

### Added
- Renovate to manage dependencies.

### Changed
- Updating dependencies and devDependencies.


v3.4.0
------------------------------
*January 6, 2020*

### Changed
- Updating dependencies and devDependencies.


v3.3.1
------------------------------
*November 7, 2019*

### Changed
- Turning off `import/no-unused-modules` rule as it's actually a pain.


v3.3.0
------------------------------
*November 7, 2019*

### Added
- Default entries for unused ESLint and Vue Eslint rules


v3.2.0
------------------------------
*November 7, 2019*

### Changed
- Updating dependencies and devDependencies


v3.1.1
------------------------------
*June 17, 2019*

### Added
- `no-unused-modules` rule


v3.1.0
------------------------------
*June 14, 2019*

### Changed
- Updated yarn.lock for indirect dependencies to fix vulnerability issues
- Minor package updates


v3.0.0
------------------------------
*April 5 2019*

### Added
- Vue ruleset. Extends the base JS linting config to also lint Vue `template` and `script` tags.

### Changed
- Updated `.eslintrc` to be `.eslintrc.js` in-line with deprecation of `.eslintrc` files.
- Minor package updates

### Removed
- `prelint` npm script as not working properly anymore.


v2.3.0
------------------------------
*November 7 2018*

### Added
- Added MemberExpression exemption to indentation rule


v2.2.0
------------------------------
*August 29 2018*

### Added
- CODEOWNERS file

### Changed
- Updated `eslint-config-airbnb-base` and other minor dependency updates


v2.1.0
------------------------------
*August 7 2018*

### Added
- Added `no-else-return` rule to release restrictions on if-else statements. It was causing a bug when auto fix is correcting the code.


v2.0.1
------------------------------
*July 13 2018*

### Fixed
- Added rule that changes `function-paren-newline` back to `multiline` (as this was changed by airbnb-config-eslint-base in it's latest update)


v2.0.0
------------------------------
*July 13 2018*

### Changed
- Upgraded to `eslint` v5 and `eslint-config-airbnb-base` v13.
- Updated peerDependency to v5.0.1 of eslint
- Parser options updated to use ecmaVersion 2018
- Updated all other packages

### Added
- `operator-linebreak` rule added (overrides base Airbnb setting)
- `max-classes-per-file` errors if over 1 reference
- `prefer-object-spread` enabled

### Removed
- Rule for padding block code removed – will truncate all functions and tests.
- Removed experimental object rest option in config.  Deprecated in eslint v5.


v1.4.0
------------------------------
*January 17 2018*

### Added
- Added `dangerfile.js` to carry out PR checks via Travis


v1.3.0
------------------------------
*January 16 2018*

### Added
- Added imports override file.
- Added override for the `import/no-unresolved` case sensistivity.

### Changed
- Updated changelog format to match other fozzie modules.


v1.2.0
------------------------------
*August 02 2017*

### Changed
- Added expected environments to the eslint config so that it doesn’t complain about using globally accessible variables such as `window` and `document`
- Improved `CHANGELOG` (Changelog inception…spooky 👻)


v1.1.0
------------------------------
*July 19 2017*

### Changed
- Turning off the `linebreak-style` rule as was causing lots of warnings across different environments (with little value)


v1.0.0
------------------------------
*June 28 2017*

### Changed
- Updating `prepublish` to `prepublishOnly` in line with latest NPM API changes.

### Added
- `'for-direction': 'error'` – [docs](http://eslint.org/docs/rules/for-direction)
- `'no-buffer-constructor': 'off'` – [docs](http://eslint.org/docs/rules/no-buffer-constructor)
- `'array-bracket-newline': 'off'` – [docs](http://eslint.org/docs/rules/array-bracket-newline)
- `'array-element-newline': 'off'` – [docs](http://eslint.org/docs/rules/array-element-newline)
- `'import/no-anonymous-default-export': 'off'`
- `'padding-line-between-statements': 'off'` – [docs](http://eslint.org/docs/rules/padding-line-between-statements)
- `'semi-style': ['error', 'last']` – [docs](http://eslint.org/docs/rules/semi-style)
- `'switch-colon-spacing': ['error', {'after': true, 'before': false}]` – [docs](http://eslint.org/docs/rules/switch-colon-spacing)


v0.1.0
------------------------------
*April 20 2017*

 - Initial commmit; reused base structure from Airbnb’s `eslint-config-airbnb-base` package, extended their base config and added in overrides for rules that we wanted to specify.
