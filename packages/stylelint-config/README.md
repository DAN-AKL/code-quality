# stylelint-config

This package includes the shareable stylelint configuration used by Digital Arts Network Auckland.

## Installation
[Authenticate to GitHub Packages](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages).

```
npm i --save-dev stylelint @dan-akl/stylelint-config
```

## Usage
Create an `.stylelintrc.js` file with the following contents:

```javascript
module.exports = {
  'extends': ['@dan-akl/stylelint-config']
}
```

### Related
  - [stylelint configuration](https://stylelint.io/user-guide/configuration/)
