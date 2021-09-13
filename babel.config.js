module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            domain: "./src/domain",
            adapter: "./src/adapter",
            view: "./src/view",
            config: ".",
          },
        },
      ],
    ],
  };
};
