# semantic-release-config

This package includes the shareable semantic-release configuration used by Digital Arts Network New Zealand.

## Plugins

This configuration uses the following plugins:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/github`](https://github.com/semantic-release/github)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/git`](https://github.com/semantic-release/git)
- [`semantic-release-slack-bot`](https://github.com/juliuscc/semantic-release-slack-bot)

## Summary

- Commits release assets to the project's git repository
- Creates a GitHub release and comments on released PRs/issues
- Publishes to npm
- Updates version in `package.json`
- Creates or updates a changelog file
- Notifies a slack channel

## Installation

```bash
npm i --save-dev semantic-release @dan-nz/semantic-release-config
```

## Usage

Create an `release.config.js` file with the following contents:

```javascript
module.exports = {
  'extends': '@dan-nz/semantic-release-config'
}
```

## GitHub Actions workflow

Make sure you have the following environment variables set:

- `NPM_TOKEN`
- `NODE_AUTH_TOKEN`
- `SLACK_WEBHOOK`
- `SEMANTIC_RELEASE_PACKAGE`

### Example workflow

```yaml
name: Release

on:
  push:
    branches:
      - master

jobs:
  test:
    # test step configuration

  release:
    needs: test
    runs-on: ubuntu-latest
    if: "!contains(github.event.head_commit.message, 'skip ci')"
    steps:
      - uses: actions/checkout@v2

      - name: Use Node.js 12.x
        uses: actions/setup-node@v1
        with:
          node-version: 12.x
          registry-url: https://npm.pkg.github.com/
          scope: '@dan-akl'

      - name: Install
        env:
          CI: true
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: npm ci

      - name: Build
        if: success()
        run: npm run build

      - name: Release
        if: success()
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
          SEMANTIC_RELEASE_PACKAGE: "package-name"
          SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
        run: npx semantic-release
```

### Related

- [semantic-release](/https://semantic-release.gitbook.io/semantic-release/)
