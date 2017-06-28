module.exports = {
    rules: {
        'array-bracket-newline': 'off',
        'array-element-newline': 'off',

        // require camel case names
        camelcase: ['error', { properties: 'always' }],

        // Stop dangling commas
        // http://eslint.org/docs/rules/comma-dangle
        'comma-dangle': ['error', 'never'],

        // this option sets a specific tab width for your code
        // http://eslint.org/docs/rules/indent
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            // MemberExpression: null,
            // CallExpression: {
            // parameters: null,
            // },
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            }
        }],

        // enforces spacing between keys and values in object literal properties
        'key-spacing': ['error', {
            beforeColon: false,
            afterColon: true,
            mode: 'minimum'
        }],

        // disallow mixed 'LF' and 'CRLF' as linebreaks
        // http://eslint.org/docs/rules/linebreak-style
        'linebreak-style': ['error', 'unix'],

        // specify the maximum length of a line in your program
        // http://eslint.org/docs/rules/max-len
        'max-len': ['error', 200, 4, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true
        }],

        // enforces new line after each method call in the chain to make it
        // more readable and easy to maintain
        // http://eslint.org/docs/rules/newline-per-chained-call
        'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

        'import/no-anonymous-default-export': 'off',

        // disallow multiple empty lines and only one newline at the end
        'no-multiple-empty-lines': ['error', { max: 4 }],

        // Allow use of unary operators, ++ and --
        // http://eslint.org/docs/rules/no-plusplus
        'no-plusplus': 'off',

        // disallow dangling underscores in identifiers
        'no-underscore-dangle': 'off',

        // allow single or multiple var statements per function
        'one-var': 'off',

        // ignore padding within blocks of code
        'padded-blocks': 'off',

        'padding-line-between-statements': 'off',

        // require or disallow space before function opening parenthesis
        // http://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'always',
            asyncArrow: 'always'
        }],

        'semi-style': ['error', 'last'],

        // require or disallow a space immediately following the // or /* in a comment
        // http://eslint.org/docs/rules/spaced-comment
        'spaced-comment': ['error', 'always', {
            line: {
                exceptions: ['-', '*'],
                markers: ['global']
            },
            block: {
                exceptions: ['-', '*'],
                balanced: false
            }
        }],

        'switch-colon-spacing': ['error', {'after': true, 'before': false}]
    }
};
