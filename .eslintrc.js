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
        "indent": "off",
        "quotes": [
            "error",
            "single"
        ],
        "comma-dangle": [
            "error",
            {
                "arrays": "never",
                "objects": "always"
            }
        ],
        "no-console": "warn",
        "no-debugger": "error",
        "require-jsdoc": "off",
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
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-inner-declarations": "error",
        "class-methods-use-this": "error",
        "no-regex-spaces": "error",
        "no-template-curly-in-string": "error",
        "no-unreachable": "error",
        "use-isnan": "error",
        "valid-typeof": "error",
        "eqeqeq": "error",
        "no-alert": "error",
        "no-case-declarations": "error",
        "no-else-return": "error",
        "no-empty-pattern": "error",
        "no-extend-native": "warn",
        "no-floating-decimal": "error",
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
        "curly": "error",
        "no-loop-func": "error",
        "no-delete-var": "error",
        "no-undef": "error",
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
        "max-depth": [
            "warn",
            {
                "max": 3
            }
        ],
        "new-cap": [
            "error",
            {
                "properties": false
            }
        ],
        "new-parens": "error",
        "no-nested-ternary": "error",
        "no-plusplus": "warn",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "no-whitespace-before-property": "error",
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