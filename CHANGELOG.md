# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

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
