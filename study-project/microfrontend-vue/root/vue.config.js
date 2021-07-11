const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
  const dependencies = require("./package.json").dependencies;

module.exports = {
  publicPath: "http://localhost:3000/",
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "root",
        filename: "remoteEntry.js",
        exposes: {},
        remotes: {
          cart: "cart@http://localhost:3001/remoteEntry.js",
          products: "products@http://localhost:3002/remoteEntry.js",
          profile: "profile@http://localhost:3003/remoteEntry.js",
        },
        shared: dependencies,
      }),
    ],
  },
  devServer: {
    port: 3000,
    progress: false,
  },
};
