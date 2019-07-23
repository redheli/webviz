var path = require( 'path' );

module.exports = {
    devtool: "eval-source-map",
  entry: {
    docs: "./src/index.js"
  },
  output: {
    path: path.resolve(`${__dirname}/docs/public/dist`),
    publicPath: "/dist/",
    pathinfo: true,
    filename: "[name].js",
    devtoolModuleFilenameTemplate: (info) => path.resolve(info.absoluteResourcePath),
  },
    resolve: {
        alias: {
          'webviz-core': path.resolve( __dirname, './src/webviz-core' )
        },
        extensions: [ '.js' ]
      },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};