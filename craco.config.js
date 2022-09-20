const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#BC1C24" },
            javascriptEnabled: true,
          },
        },
        resolve: {
          extensions: [".tsx", ".ts", ".js"],
        },
      },
    },
  ],
};
