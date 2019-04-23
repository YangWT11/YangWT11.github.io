var hljs = require('highlight.js/lib/highlight');
var javascript = require('highlight.js/lib/languages/javascript');
hljs.registerLanguage('javascript', javascript);
module.exports = {
    indexPath: "../index.html",
    publicPath: process.env.NODE_ENV == "development" ? "" : "./dist",
    configureWebpack: config => {
        config.module.rules.push({
            // 处理jquery
            test: /\.md$/,
            use: [{ loader: 'html-loader' }, {
                loader: 'markdown-loader', options: {
                    highlight: function (code) {
                        return hljs.highlightAuto(code).value
                    }
                }
            }
            ],
        })
    }
}