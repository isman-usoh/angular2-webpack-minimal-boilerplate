
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var _root = path.resolve(__dirname);
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [_root].concat(args));
}

module.exports = {
    devServer: {
        contentBase: "www",
        devtool: "eval",
        historyApiFallback: true,
        stats: "minimal",
        hot: true,
        inline: true,
        port: 3000
    },
    // configuration
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
        publicPath: "build",
        filename: "build/[name].bundle.js"
    },
    resolve: {
        modulesDirectories: ["app", "node_modules"],
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin(),
        new HtmlWebpackPlugin({
            template: "index.template.html"
        })
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loaders: ["ts", "angular2-template"], exclude: /node_modules/ },
            { test: /\.html$/, loader: "html" },
            { test: /\.css$/, exclude: root("app"), loader:"style!css?sourceMap" },
            { test: /\.css$/, include: root("app"), loader: "raw" },
            { test: /\.(png|jpe?g|gif|svg|ico)$/, loader: "file?name=/assets/images/[name]-[[hash:4]].[ext]?v=[version]" },
            { test: /\.(woff|woff2|ttf|eot)$/, loader: "file?name=/assets/fonts/[name]-[hash:4].[ext]?v=[version]" }
        ],
        preLoaders: [
            { test: /\.tsx?$/, loader: "tslint" }
        ]
    },
    ts: {

    },
    fileLoader: {
        version: "1.0"
    }
};