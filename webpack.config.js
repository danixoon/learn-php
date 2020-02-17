module.exports = {
  target: "web",
  entry: "./client/src/index.jsx",
  mode: "development",
  output: {
    path: __dirname + "/public/js",
    library: "app",
    libraryTarget: "umd",
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
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
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
