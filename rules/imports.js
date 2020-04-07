module.exports = {
    rules: {
        'import/no-named-export': 'off',

        'import/no-relative-parent-imports': 'off',

        'import/no-unresolved': [
            'error',
            {
                caseSensitive: false,
                commonjs: true
            }
        ],

        'import/no-unused-modules': 'off'
    }
};
