module.exports = {
  "defaultSeverity": "warning",
  "extends": [
    "stylelint-prettier/recommended",
    "stylelint-config-prettier"
  ],
  "plugins": [
    "stylelint-prettier"
  ],
  "rules": {
    "prettier/prettier": [
      true,
      {
        "printWidth": 9999,
        "singleQuote": false,
        "semi": true,
        "trailingComma": "none",
        "tabWidth": 2
      }
    ]
  }
};
