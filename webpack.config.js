const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/'},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: '/node_modules/'},
            {test: /\.css$/, loader: ['style-loader','css-loader'], exclude: '/node_modules/'},
            {test: /\.(png|jp(e*)g|svg)$/, loader: 'url-loader', exclude: '/node_modules/'}
        ]
    },
    plugins: [HtmlWebpackPluginConfig]
}