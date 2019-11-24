# eslint-config

This package includes the shareable ESLint configuration used by Digital Arts Network Auckland.

## Installation
[Authenticate to GitHub Packages](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages).

```
npm i --save-dev eslint prettier @dan-akl/eslint-config-vanilla
```

## Usage
Create an `.eslintrc.js` file with the following contents:

```javascript
module.exports = {
  'extends': '@dan-akl/eslint-config-vanilla'
}
```

### Related
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
