module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                // include: __dirname + "/frontend/",
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}