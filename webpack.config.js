const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // entry: './ex1/index.js',
    // entry: './ex2/index.js',
    // entry: './ex3/index.js',
    // entry: './ex4/index.js',
    // entry: './ex5/index.js',
    // entry: './ex6/index.js',
    // entry: './ex7/index.js',
    entry: './ex8/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        // faz o carregamento dos arquivos para resolver o problema do exercício 3
        loaders: [{
            test: /.js?$/,
            // será necessario instalar a depencendia do babel
            // npm i --save-dev babel-core@6.22.1 babel-loader@6.2.10 babel-preset-es2015@6.22.0
            // preset do react
            // npm i --save-dev babel-preset-react@6.22.0
            loader: 'babel-loader', 
            exclude: /node_modules/,
            query: {
                // traduzir o que for referente ao ecmascript 2015 e ao React, para esse caso
                presets: ['es2015', 'react'], 
                // interpretar o plugin para entender o operador
                // npm i --save-dev babel-plugin-transform-object-rest-spread@6.22.0
                plugins: ['transform-object-rest-spread'] 
            }
        },
        {
            //npm i --save-dev extract-text-webpack-plugin@1.0.1 style-loader@0.13.1 css-loader@0.26.1
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    }
}