module.exports = {
    rules: {
        // require default case in switch statements
        'default-case': ['error', { commentPattern: '^no default$' }],

        'max-classes-per-file': ['error'],

        // disallow reassignments of native objects or read-only globals
        // http://eslint.org/docs/rules/no-global-assign
        'no-global-assign': ['error', { exceptions: [] }],


        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        // rule: http://eslint.org/docs/rules/no-param-reassign.html
        'no-param-reassign': ['error', {
            props: false
        }],

        // disallow usage of expressions in statement position
        'no-unused-expressions': ['error', {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false
        }],

        // Do not restrict else if statements
        // It was causing a bug when auto fix is correcting the code
        'no-else-return': ['error', {
            allowElseIf: true
        }]
    }
};
