# commitlint-config

This package includes the shareable commitlint configuration used by Digital Arts Network Auckland.

## Installation
[Authenticate to GitHub Packages](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages).

```
npm i --save-dev @commitlint/cli @dan-akl/commitlint-config
```

_Note:_ for monorepos install of these at the root.

## Usage
Create an `commitlint.config.js` file with the following contents:

```javascript
module.exports = {
  extends: [
    '@dan-akl/commitlint-config'
  ],
}
```

### Install `husky`
```
npm i --save-dev husky
```

### Add a husky hook to package.json
This will be executed whenever a new commit is created.
```json
// package.json
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

### Install `commitizen` prompt
```
npm i --save-dev commitizen cz-conventional-changelog
```

### Add Commitizen adapter config
```json
// package.json
{
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}
```

### Add a script pointing to Commitizen cli
```json
// package.json
{
  "scripts": {
    "commit": "git-cz"
  }
}
```

To start a commit, run `npm run commit` instead of the usual `git commit`.

### Related
- [commitlint](https://commitlint.js.org/#/)
- [husky](https://github.com/typicode/husky)
- [Commitizen](http://commitizen.github.io/cz-cli/)
