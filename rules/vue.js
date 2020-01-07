module.exports = {
    rules: {
        'vue/array-bracket-spacing': ['error', 'never'],

        'vue/arrow-spacing': ['error', { before: true, after: true }],

        'vue/block-spacing': ['error', 'always'],

        'vue/brace-style': ['error', '1tbs', { allowSingleLine: true }],

        'vue/camelcase': ['error', { properties: 'never' }],

        'vue/comma-dangle': ['error', 'never'],

        'vue/component-definition-name-casing': 'error',

        // Use kebab-case for Vue component names, as then in-line with the
        // HTML custom elements spec (which requires that a dash is included in the name)
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],

        'vue/component-tags-order': ['error', {
            order: ['template', 'script', 'style']
        }],

        'vue/dot-location': ['error', 'property'],

        'vue/eqeqeq': ['error', 'always', { null: 'ignore' }],

        'vue/html-closing-bracket-newline': 'off',

        'vue/html-indent': ['error', 4],

        'vue/key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'minimum'
        }],

        'vue/keyword-spacing': ['error', {
            before: true,
            after: true,
            overrides: {
                return: { after: true },
                throw: { after: true },
                case: { after: true }
            }
        }],

        'vue/match-component-file-name': 'off',

        'vue/max-len': 'off',

        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-boolean-default.md
        'vue/no-boolean-default': 'off',

        // https://vuejs.org/v2/api/#scope-removed
        'vue/no-deprecated-scope-attribute': 'warn',

        'vue/no-deprecated-slot-attribute': 'error',

        'vue/no-deprecated-slot-scope-attribute': 'error',

        'vue/no-empty-pattern': 'error',

        'vue/no-irregular-whitespace': 'error',

        'vue/no-reserved-component-names': 'error',

        // Copy of baseAIrbnb restricted-syntax ruleset
        // https://github.com/airbnb/javascript/blob/b85baeafed8b66fdd9756439a0b8774860147913/packages/eslint-config-airbnb-base/rules/style.js#L332-L352
        'vue/no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
            },
            {
                selector: 'ForOfStatement',
                message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
            }
        ],

        'vue/no-static-inline-styles': 'error',

        'vue/no-unsupported-features': 'error',

        'vue/object-curly-spacing': ['error', 'always'],

        'vue/require-direct-export': 'off',

        'vue/require-name-property': 'off',

        'vue/script-indent': 'off',

        'vue/space-infix-ops': 'error',

        // Require or disallow spaces before/after unary operators
        // https://eslint.org/docs/rules/space-unary-ops
        'vue/space-unary-ops': ['error', {
            words: true,
            nonwords: false
        }],

        'vue/static-class-names-order': 'off',

        'vue/v-on-function-call': ['error', 'never'],

        'vue/v-slot-style': 'off',

        'vue/valid-v-bind-sync': 'error',

        'vue/valid-v-slot': 'error'
    }
};
