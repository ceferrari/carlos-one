module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    //"linebreak-style": 0,
    "eslint linebreak-style": [0, "error", "unix"],
    "max-len": ["error", { "code": 9999 }]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
