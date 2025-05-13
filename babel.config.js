const ReactCompilerConfig = {
  target: '18'
};

module.exports = function(api){
  api.cache(true);

  return {

    "presets": [
      ["@babel/preset-env", { "targets": { "node": "current" } }],
      "@babel/preset-typescript",
      ["@babel/preset-react", { "runtime": "automatic" }]
    ],
    "plugins": [
      ["babel-plugin-react-compiler", ReactCompilerConfig],
      "react-obsidian/dist/transformers/babel-plugin-obsidian",
      ["@babel/plugin-proposal-decorators", { "version": "2023-11" }]
    ]
  }
}
