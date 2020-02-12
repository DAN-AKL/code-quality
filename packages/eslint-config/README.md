# eslint-config

This package includes the shareable ESLint configuration used by Digital Arts Network New Zealand.

## Installation
```
npm i --save-dev eslint prettier @dan-nz/eslint-config
```

## Usage
Create an `.eslintrc.js` file with the following contents:

### Vanilla JavaScript
```javascript
module.exports = {
  'extends': '@dan-nz/eslint-config'
}
```

### React
```javascript
module.exports = {
  'extends': '@dan-nz/eslint-config/react'
}
```

### Related
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
