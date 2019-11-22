# commitlint-config

This package includes the shareable commitlint configuration used by Digital Arts Network Auckland.

## Installation
[Authenticate to GitHub Packages](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages).

```
npm install @commitlint/cli @dan-akl/commitlint-config --save-dev
```

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
npm install --save-dev husky
```

### Add a git hook
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

### Related
- [commitlint](https://commitlint.js.org/#/)
- [Commitizen](http://commitizen.github.io/cz-cli/)
- [husky](https://github.com/typicode/husky)
- [git hooks](https://git-scm.com/docs/githooks)
