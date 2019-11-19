"use strict";

module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "es5"
      }
    ],
    "max-len": [1, { ignoreStrings: true }],
    "no-param-reassign": [
      2,
      {
        props: false
      }
    ],
    "no-console": "error",
    "no-plusplus": 0,
    "no-underscore-dangle": 0,
    "prefer-rest-params": 0,
    "comma-dangle": [
      2,
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never"
      }
    ],
    "import/no-extraneous-dependencies": [2, { devDependencies: true }],
    "import/order": 0
  }
};
