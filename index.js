module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'standard',
        'plugin:import/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:jsonc/recommended-with-jsonc',
        'plugin:toml/recommended',
        'plugin:yml/standard',
        'plugin:markdown/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    ignorePatterns: [
        '.cache',
        '*.min.*',
        'CHANGELOG.md',
        'dist',
        'LICENSE.*',
        'public',
        'temp',
    ],
    plugins: [
        'html',
        'unicorn',
    ],
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] },
        },
    },
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
            rules: {
                'no-unused-vars': 'off',
                'no-undef': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
            },
        },
        {
            files: ['*.json', '*.json5'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'quotes': ['error', 'double'],
                'quote-props': ['error', 'always'],
                'comma-dangle': ['error', 'never'],
            },
        },
        {
            files: ["*.toml"],
            parser: "toml-eslint-parser"
        },
        {
            files: ['*.yaml', '*.yml'],
            parser: 'yaml-eslint-parser',
        },
        {
            files: ['package.json'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'jsonc/sort-keys': [
                    'error',
                    {
                        pathPattern: '^$',
                        order: [
                            'name',
                            'version',
                            'description',
                            'keywords',
                            'license',
                            'repository',
                            'funding',
                            'author',
                            'type',
                            'files',
                            'exports',
                            'main',
                            'module',
                            'unpkg',
                            'bin',
                            'scripts',
                            'husky',
                            'lint-staged',
                            'peerDependencies',
                            'peerDependenciesMeta',
                            'dependencies',
                            'devDependencies',
                            'eslintConfig',
                        ],
                    },
                    {
                        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
                        order: { type: 'asc' },
                    },
                ],
            },
        },
        {
            files: ['*.d.ts'],
            rules: {
                'import/no-duplicates': 'off',
            },
        },
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
        {
            files: ['scripts/**/*.*', 'cli.*'],
            rules: {
                'no-console': 'off',
            },
        },
        {
            files: ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
            rules: {
                'no-unused-expressions': 'off',
            },
        },
        {
            // Code blocks in markdown file
            files: ['**/*.md/*.*'],
            rules: {
                'no-unused-vars': 'off',
                'no-undef': 'off',
                'no-console': 'off',
                'no-unused-expressions': 'off',
                'import/no-unresolved': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/no-use-before-define': 'off',
            },
        },
    ],
    rules: {
        // import
        'import/order': 'error',
        'import/first': 'error',
        'import/named': 'off',
        'import/no-mutable-exports': 'error',
        'import/no-unresolved': 'off',
        'import/no-absolute-path': 'off',

        // Common
        'semi': ['error', 'always'],
        'curly': ['error', 'multi-or-nest', 'consistent'],
        'quotes': ['error', 'single'],
        'quote-props': ['error', 'consistent-as-needed'],
        'no-param-reassign': 'off',
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'always'],
        'camelcase': 'off',
        'comma-spacing': ['error', { before: false, after: true }],
        'comma-style': ['error', 'last'],
        'no-constant-condition': 'warn',
        'no-debugger': 'error',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-cond-assign': ['error', 'always'],
        'func-call-spacing': ['off', 'never'],
        'key-spacing': ['error', { beforeColon: false, afterColon: true }],
        'no-restricted-syntax': [
            'error',
            'DebuggerStatement',
            'LabeledStatement',
            'WithStatement',
        ],
        'no-return-await': 'off',
        'space-before-function-paren': ['error', 'never'],

        /* JS Standard
        'indent': ['error', 4, { SwitchCase: 2, VariableDeclarator: 2, outerIIFEBody: 2 }],
        'no-unused-vars': 'warn',
        'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
        'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        'comma-dangle': ['error', 'always-multiline'],
        'object-curly-spacing': ['error', 'always'],
        */


        // JS Overrides for TS
        'no-useless-constructor': 'off',
        'indent': 'off',
        'no-unused-vars': 'off',
        'no-redeclare': 'off',
        'no-use-before-define': 'off',
        'brace-style': 'off',
        'comma-dangle': 'off',
        'object-curly-spacing': 'off',

        // TS
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
        '@typescript-eslint/type-annotation-spacing': ['error', {}],
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
        '@typescript-eslint/prefer-ts-expect-error': 'error',

        // TS Off
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-namespace': 'off',

        // TS Overrides
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
        '@typescript-eslint/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],

        // Vue
        'vue/max-attributes-per-line': 'off',
        'vue/no-v-html': 'off',
        'vue/require-prop-types': 'off',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',

        // es6
        'no-var': 'error',
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],
        'object-shorthand': [
            'error',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: true,
            },
        ],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'template-curly-spacing': 'error',
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        'generator-star-spacing': 'off',
        'spaced-comment': ['error', 'always', {
            line: {
                markers: ['/'],
                exceptions: ['/', '#'],
            },
            block: {
                markers: ['!'],
                exceptions: ['*'],
                balanced: true,
            },
        }],

        // best-practice
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'consistent-return': 'off',
        'complexity': ['off', 11],
        'eqeqeq': ['error', 'smart'],
        'no-alert': 'warn',
        'no-case-declarations': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-with': 'error',
        'no-void': 'error',
        'no-useless-escape': 'off',
        'vars-on-top': 'error',
        'require-await': 'off',
        'no-return-assign': 'off',
        'operator-linebreak': ['error', 'before'],

        // unicorns
        // Pass error message when throwing errors
        'unicorn/error-message': 'error',
        // Uppercase regex escapes
        'unicorn/escape-case': 'error',
        // Array.isArray instead of instanceof
        'unicorn/no-array-instanceof': 'error',
        // Prevent deprecated `new Buffer()`
        'unicorn/no-new-buffer': 'error',
        // Keep regex literals safe!
        'unicorn/no-unsafe-regex': 'off',
        // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
        'unicorn/number-literal-case': 'error',
        // ** instead of Math.pow()
        'unicorn/prefer-exponentiation-operator': 'error',
        // includes over indexOf when checking for existence
        'unicorn/prefer-includes': 'error',
        // String methods startsWith/endsWith instead of more complicated stuff
        'unicorn/prefer-starts-ends-with': 'error',
        // textContent instead of innerText
        'unicorn/prefer-text-content': 'error',
        // Enforce throwing type error when throwing error while checking typeof
        'unicorn/prefer-type-error': 'error',
        // Use new when throwing error
        'unicorn/throw-new-error': 'error',

        'eslint-comments/disable-enable-pair': 'off',
        'import/no-named-as-default-member': 'off',
        'n/no-callback-literal': 'off',

        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: false,
            },
        ],
    },
};
