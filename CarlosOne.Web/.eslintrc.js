module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "extends": [
    "plugin:vue/recommended",
    "prettier",
    "prettier/vue"
  ],
  "plugins": [
    "prettier",
    "vue"
  ],
  "rules": {
    "max-len": [
      "warn",
      {
        "code": 9999
      }
    ],
    "prettier/prettier": [
      "warn",
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
