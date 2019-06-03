module.exports = function (api) {
  api.cache(true);

  const presets = ["@vue/app"];

  //const presets = [
  //  [
  //    "@babel/preset-env",
  //    {
  //      "useBuiltIns": "entry",
  //      "corejs": 3,
  //      "targets": {
  //        "ie": "11"
  //      }
  //    }
  //  ]
  //];

  const plugins = [
    "@babel/plugin-syntax-dynamic-import",
    //"@babel/plugin-transform-runtime",
    ["@babel/plugin-transform-runtime", { "corejs": 3 }]
    //"@babel/plugin-transform-async-to-generator",
    //"@babel/plugin-syntax-import-meta",
    //"@babel/plugin-proposal-class-properties",
    //"@babel/plugin-proposal-json-strings",
    //["@babel/plugin-proposal-decorators",{ "legacy": true}],
    //"@babel/plugin-proposal-function-sent",
    //"@babel/plugin-proposal-export-namespace-from",
    //"@babel/plugin-proposal-numeric-separator",
    //"@babel/plugin-proposal-throw-expressions"
  ];

  return {
    presets,
    plugins
  };
}
