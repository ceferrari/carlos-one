module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "global-require": 0,
    "linebreak-style": 0,
    "eslint linebreak-style": [0, "error", "windows"]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
