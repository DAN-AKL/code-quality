# eslint-config

This package includes the shareable ESLint configuration used by Digital Arts Network Auckland.

## Installation
[Authenticate to GitHub Packages](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages).

Install `eslint` and `prettier`:
```
npm install eslint prettier --save-dev
```

Install this package:
```
npm install @dan-akl/eslint-config-vanilla --save-dev
```

## Usage
Create an .eslintrc file with the following contents:

```
{
  "extends": "@dan-akl/eslint-config-vanilla"
}
```

### Related
