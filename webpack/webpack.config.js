module.exports = {
    devtool: 'eval-source-map',

    entry:  __dirname + "/app/main.js",

    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.json/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules',
            }
        ]
    },
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
}