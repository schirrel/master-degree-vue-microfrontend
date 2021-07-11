const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;

module.exports = {
  publicPath: "http://localhost:3002/",
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "products",
        filename: "remoteEntry.js",
        exposes: {
          "./Products": "./src/components/Products",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 3002,
    progress: false,
  },
};
