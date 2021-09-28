module.exports = {
  rules: [
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    },
    { test: /\.css$/, use: "css-loader" },
  ],
};
