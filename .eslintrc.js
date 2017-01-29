module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "amd": true,
        "jasmine": true,
        "phantomjs": true,
        "commonjs": true
    },
    "rules": {
        // google eslint config
        'no-cond-assign': 0,
        'no-irregular-whitespace': 2,
        'no-unexpected-multiline': 2,
        'valid-jsdoc': [2, {
            requireParamDescription: false,
            requireReturnDescription: false,
            requireReturn: false,
            prefer: {returns: 'return'},
        }],
        'guard-for-in': 2,
        'no-caller': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-invalid-this': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-new-wrappers': 2,
        'no-throw-literal': 2,
        'no-with': 2,
        'no-unused-vars': [2, {args: 'none'}],
        'array-bracket-spacing': [2, 'never'],
        'brace-style': 2,
        'camelcase': [2, {properties: 'never'}],
        'comma-dangle': [2, 'always-multiline'],
        'comma-spacing': 2,
        'comma-style': 2,
        'computed-property-spacing': 2,
        'eol-last': 2,
        'func-call-spacing': 2,
        'key-spacing': 2,
        'keyword-spacing': 0,
        'linebreak-style': 2,
        'max-len': [2, {
            code: 80,
            tabWidth: 2,
            ignoreUrls: true,
            ignorePattern: '^goog\.(module|require)',
        }],
        'new-cap': 2,
        'no-array-constructor': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [2, {max: 2}],
        'no-new-object': 2,
        'no-trailing-spaces': 2,
        'object-curly-spacing': 2,
        'one-var': [2, {
            var: 'never',
            let: 'never',
            const: 'never',
        }],
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'consistent'],
        'quotes': [2, 'single', {allowTemplateLiterals: true}],
        'require-jsdoc': [2, {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: true,
                ClassDeclaration: true,
            },
        }],
        'semi-spacing': 2,
        'semi': 2,
        'space-before-blocks': 2,
        'space-before-function-paren': [2, 'never'],
        'spaced-comment': [2, 'always'],
        'arrow-parens': [2, 'always'],
        'constructor-super': 2,
        'generator-star-spacing': [2, 'after'],
        'no-new-symbol': 2,
        'no-this-before-super': 2,
        'no-var': 2,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'rest-spread-spacing': 2,
        'yield-star-spacing': [2, 'after'],

        /* MARFEEL */

        //Possible Errors
        "no-console": "error",
        "no-debugger": "error",
        "no-constant-condition": "error",
        "no-control-regex": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-empty-character-class": "error",
        "no-empty": [
            "error",
            {
                "allowEmptyCatch": true
            }
        ],
        "no-ex-assign": "error",
        "no-extra-boolean-cast": "error",
        "no-extra-parens": "error",
        "no-extra-semi": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-regex-spaces": "error",
        "no-template-curly-in-string": "error",
        "no-unreachable": "error",
        "use-isnan": "error",
        "valid-typeof": "error",

        //Best Practices
        "curly": "error",
        "class-methods-use-this": "error",
        "eqeqeq": "error",
        "no-alert": "error",
        "no-case-declarations": "error",
        "no-else-return": "error",
        "no-empty-pattern": "error",
        "no-extend-native": "warn",
        "no-floating-decimal": "error",
        "no-loop-func": "error",
        "no-octal": "error",
        "no-param-reassign": "error",
        "no-redeclare": "error",
        "no-return-assign": "error",
        "no-self-assign": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "radix": "error",
        "wrap-iife": "error",
        "yoda": "error",

        //Variables
        "no-delete-var": "error",
        "no-undef": "error",

        //Stylistic Issues
        "comma-dangle": [
            "error",
            {
                "arrays": "never",
                "objects": "always"
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "indent": "off",
        "max-depth": [
            "warn",
            {
                "max": 3
            }
        ],
        "max-len": [
            "warn",
            {
                "code": 120,
                "tabWidth": 2,
                "ignoreComments": true,
                "ignoreTemplateLiterals": true,
                "ignoreUrls": true
            }
        ],
        "new-cap": [
            "error",
            {
                "properties": false
            }
        ],
        "require-jsdoc": "off",
        "new-parens": "error",
        "no-nested-ternary": "error",
        "no-plusplus": "warn",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "no-whitespace-before-property": "error",

        //ECMAScript 6
        "no-class-assign": "error",
        "no-const-assign": "error",
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "object-shorthand": "error",
        "prefer-spread": "error",
        "sort-imports": [
            "warn",
            {
                "ignoreCase": true
            }
        ],
        "no-dupe-class-members": "error",
        "prefer-const": [
            "error",
            {
                "destructuring": "any",
                "ignoreReadBeforeAssign": false
            }
        ],
        "prefer-template": "error",
        "template-curly-spacing": "error"
    }
}
