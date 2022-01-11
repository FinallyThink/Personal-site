module.exports = {
    publicPath: './',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '令灵的个人站点';
                return args
            })
    },
    devServer: {
        proxy:{
        'post/':{
              target: 'https://eastgm.com/',
              changeOrigin: true,    
        },
        'img/':{
            target: 'https://eastgm.com/',
            changeOrigin: true,    
        },
    },
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
    },
}