const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

module.exports = {
  publicPath: "http://localhost:3001/",
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "cart",
        filename: "remoteEntry.js",
        exposes: {
          "./Cart": "./src/components/Cart",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 3001,
    progress: false,
  },
};
