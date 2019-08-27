module.exports = {
    rules: {
        'import/no-unresolved': [
            'error',
            {
                commonjs: true,
                caseSensitive: false
            }
        ],

        'import/no-relative-parent-imports': 'off',

        'import/no-named-export': 'off',

        'import/no-unused-modules': 'error'
    }
};
