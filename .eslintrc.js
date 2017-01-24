module.exports = {
    "extends": "google",
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
