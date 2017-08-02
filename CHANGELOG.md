# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [1.2.0] - 2017-08-02
==================

### Changed
- Added expected environments to the eslint config so that it doesn’t complain about using globally accessible variables such as `window` and `document`
- Improved `CHANGELOG` (Changelog inception…spooky 👻)

## [1.1.0] - 2017-07-19
==================

### Changed
- Turning off the `linebreak-style` rule as was causing lots of warnings across different environments (with little value)


## [1.0.0] - 2017-06-28
==================

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



0.1.0 / 2017-04-20
==================
 - Initial commmit; reused base structure from Airbnb’s `eslint-config-airbnb-base` package, extended their base config and added in overrides for rules that we wanted to specify.
