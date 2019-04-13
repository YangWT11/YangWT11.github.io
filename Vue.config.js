module.exports = {
    indexPath: "../index.html",
    publicPath: process.env.NODE_ENV == "development" ? "" : "./dist",
    configureWebpack: config => {
        config.module.rules.push({
            // 处理jquery
            test: /\.md$/,
            use: [{ loader: 'html-loader' }, { loader: 'markdown-loader' }]
        })
    }
}