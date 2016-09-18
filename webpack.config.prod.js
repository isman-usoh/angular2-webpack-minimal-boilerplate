
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var _root = path.resolve(__dirname);
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

module.exports = {
    // configuration
    devtool: "cheap-module-source-map",
    context: path.resolve(__dirname, "app"),
    entry: {
        app: [
            "core-js",
            "zone.js",
            "reflect-metadata",
            "./main"
        ]
    },
    output: {
        path: path.resolve(__dirname, "www"),
        filename: "build/[name].bundle.js"
    },
    resolve: {
        modulesDirectories: ["app", "node_modules"],
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
        new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new HtmlWebpackPlugin({
            template: "index.template.html"
        }),
        new ExtractTextPlugin("styles[hash].css")
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loaders: ["ts", "angular2-template"], exclude: /node_modules/ },
            { test: /\.html$/, loader: "html" },
            { test: /\.css$/, exclude: root("app"), loader: ExtractTextPlugin.extract("style", "css") },
            { test: /\.css$/, include: root("app"), loader: "raw" },
            { test: /\.(png|jpe?g|gif|svg|ico)$/, loader: "file?name=/assets/images/[name]-[[hash:4]].[ext]?v=[version]" },
            { test: /\.(woff|woff2|ttf|eot)$/, loader: "file?name=/assets/fonts/[name]-[hash:4].[ext]?v=[version]" }
        ]
    },
    htmlLoader: {
        minimize: false
    },
    ts: {

    }
};