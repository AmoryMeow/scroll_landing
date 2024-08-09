module.exports = {
  plugins: [
    require("postcss-nested"),
    require("postcss-simple-vars"),
    require("postcss-preset-env")({
      stage: 1,
    }),
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
