# eslint-config

This package includes the shareable ESLint configuration used by Digital Arts Network Auckland.

## Installation
[Authenticate to GitHub Packages](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages).

```
npm i --save-dev eslint prettier @dan-akl/eslint-config
```

## Usage
Create an `.eslintrc.js` file with the following contents:

### Vanilla JavaScript
```javascript
module.exports = {
  'extends': '@dan-akl/eslint-config'
}
```

### React
```javascript
module.exports = {
  'extends': '@dan-akl/eslint-config/react'
}
```

### Related
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
