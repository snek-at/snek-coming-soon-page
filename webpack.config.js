const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.tsx'),
    module: {
        rules: [{
                test: /\.(ts|tsx)$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: './'
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: './'
                }
            },
            {
                test: /\.css$/i,
                use: 'css-loader'
            }
        ]
    },
    resolve: {
      extensions: ['.ts', '.rsx', '.js']
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'app.bundle.js'
    },
    devServer: {
        static: path.resolve(__dirname, './public')
    },
}