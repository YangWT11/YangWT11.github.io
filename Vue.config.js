module.exports = {
    indexPath: "../index.html",
    // assetsDir: "./dist",
    publicPath:"./dist",
    configureWebpack: config => {
        config.module.rules.push({
            // 处理jquery
            test: /\.md$/,
            use: [{ loader: 'html-loader' }, { loader: 'markdown-loader' }]
        })
    }
}