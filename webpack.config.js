const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  plugins: [new MiniCssExtractPlugin({ filename: "/../css/styles.css" })],
  target: "web",
  entry: ["babel-polyfill", __dirname + "/client/src/index.jsx"],
  // mode: "development",
  // devtool: "eval",
  output: {
    path: __dirname + "/public/js",
    library: "app",
    libraryTarget: "var",
    filename: "index.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          MiniCssExtractPlugin.loader,

          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
          // "style-loader",
          // {
          //   loader: "css-loader",
          //   options: {
          //     modules: true
          //   }
          // }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};

// export default {
//   entry: "./src/index.js",
//   mode: "development",
//   output: {
//     filename: "public/js/main.js"
//   }
// };
