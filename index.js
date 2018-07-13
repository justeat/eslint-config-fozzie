module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
    extends: [
        'eslint-config-airbnb-base',
        './rules/best-practices',
        './rules/errors',
        './rules/node',
        './rules/style',
        './rules/es6',
        './rules/imports'
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        strict: 'error'
    }
};
