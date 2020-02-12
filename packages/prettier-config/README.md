# prettier-config

This package includes the shareable Prettier configuration used by Digital Arts Network New Zealand.

## Installation
```
npm i --save-dev @dan-nz/prettier-config
```

## Usage
Create a `.prettierrc.js` file with the following contents:

```javascript
module.exports = require('@dan-nz/prettier-config');
```

## Extending
Overwrite properties from the shared configuration:

```javascript
module.exports = {
    ...require('@dan-nz/prettier-config'),

    // Project-specific options
    semi: false
};
```

### Related
  - [Prettier](https://prettier.io/)
