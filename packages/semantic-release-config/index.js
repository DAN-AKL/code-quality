module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
			"@semantic-release/changelog",
			{
				"changelogTitle": "# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines."
			}
		],
    "@semantic-release/github",
    "@semantic-release/npm",
    [
			"@semantic-release/git",
			{
				"message": "chore(release): ${nextRelease.version} [skip ci]"
			}
		],
    [
      "semantic-release-slack-bot",
      {
        "notifyOnSuccess": true,
        "notifyOnFail": true
      }
    ]
  ]
}
