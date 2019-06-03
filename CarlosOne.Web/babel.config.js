module.exports = function(api) {
  api.cache(true);

  const presets = ["@vue/app"];

  const plugins = [
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-transform-runtime", { corejs: 3 }]
    //"@babel/plugin-transform-async-to-generator"
  ];

  return {
    presets,
    plugins
  };
};
