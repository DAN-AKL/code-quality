# prettier-config

This package includes the shareable Prettier configuration used by Digital Arts Network Auckland.

## Installation
[Authenticate to GitHub Packages](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages).

```
npm i --save-dev @dan-akl/prettier-config
```

## Usage
Create a `.prettierrc.js` file with the following contents:

```javascript
module.exports = require('@dan-akl/prettier-config');
```

## Extending
Overwrite properties from the shared configuration:

```javascript
module.exports = {
    ...require('@dan-akl/prettier-config'),

    // Project-specific options
    semi: false
};
```

### Related
  - [Prettier](https://prettier.io/)
