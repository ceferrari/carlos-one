module.exports = {
  "rules": {
    "max-empty-lines": 1,
    "block-no-empty": null,
    "color-no-invalid-hex": true,
    "declaration-colon-space-after": "always",
    "comment-empty-line-before": ["always", {
      "ignore": ["stylelint-commands", "after-comment"]
    }],
    "rule-empty-line-before": ["always", {
      "except": ["first-nested"],
      "ignore": ["after-comment"]
    }],
    "unit-whitelist": ["px", "em", "rem", "%", "s"]
  }
};
