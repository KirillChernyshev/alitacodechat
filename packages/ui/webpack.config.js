// Extra dependencies to get this config executable:
// npm i -D @babel/preset-react style-loader css-loader

import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import webpack from "webpack"

const config = {
  entry: path.resolve(path.join("src", "main.jsx")),
  output: {
    path: path.resolve("dist-webpack")
  },
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx"], // This allows webpack to resolve both .js and .jsx modules for import statements
    alias: {
      '@': path.resolve("src") // This maps @ to src in import statements
    }
  },
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
        options: {
          presets: [["@babel/preset-react", {"runtime": "automatic"}]]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false, // This will remove comments from the minified output
          },
        },
        extractComments: false, // This will disable the generation of license files
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      // import.meta.env is required to support built-in Vite configurations
      "import.meta.env": {},
      "import.meta.env.ALTERNATIVE_HOST": JSON.stringify("http://calltoide.com"),
    })
  ]
};

export default config;