const path = require("path");
const webpack = require("webpack");

module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  webpack: {
    configure: {
      resolve: {
        alias: {
          assert: "assert",
          buffer: "buffer",
          crypto: "crypto-browserify",
          http: "stream-http",
          https: "https-browserify",
          os: "os-browserify/browser",
          process: "process/browser",
          stream: "stream-browserify",
          util: "util",
        }
      },
      experiments: {
        asyncWebAssembly: true,
      },
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),
    ],
  },
};
