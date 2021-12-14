const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname),
    entry: "./index.tsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            "react-native": "react-native-web"
        },
    },
    module: {
        rules: [
            {
              test: /\.(js|ts)x?$/,
              include: path.resolve(__dirname, "../shared"),
              use: {
                  loader: "babel-loader",
                  options: {
                      "presets": [ "module:metro-react-native-babel-preset" ],
                      "plugins": [
                        ["react-native-web"]
                      ]
                  }
              }
            },
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
        }),
    ],
    devServer: {
        port: 9000
    },
};
