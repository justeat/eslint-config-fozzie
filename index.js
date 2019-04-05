const resolvedExtends = [
    './rules/vue',
    'eslint-config-airbnb-base',
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/es6',
    './rules/imports'
].map(require.resolve);

resolvedExtends.unshift('plugin:vue/recommended');

module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
    extends: resolvedExtends,
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        strict: 'error'
    }
};
