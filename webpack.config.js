var path = require('path');

module.exports = {
    entry: "./app/src/app.jsx",
    output: {
        path: path.resolve(__dirname, 'app/public/'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: "babel-loader",
                options: {
                    presets: ["react", "es2015"]
                }
            }
        ]
    },
    resolve : {
         extensions: [".js", ".json", ".jsx", ".css"],
    }
}