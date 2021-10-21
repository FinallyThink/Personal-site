module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '令灵的个人站点';
                return args
            })
    }
}