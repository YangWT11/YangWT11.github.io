module.exports = {
    publicPath: "/blog/",
    outputDir: './docs',
    assetsDir: "./",
    configureWebpack: config => {
        config.module.rules.push({
            // 处理jquery
            test: /\.md$/,
            use: [{ loader: 'html-loader' }, { loader: 'markdown-loader' }]
        })
    }
}