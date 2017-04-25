module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        './rules/best-practices',
        './rules/errors',
        './rules/style',
        './rules/es6'
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        strict: 'error'
    }
};
