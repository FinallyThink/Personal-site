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
        //   'article/':{
            'post/':{
              target: 'http://localhost:3000/',
               changeOrigin: false,     // target是域名的话，需要这个参数，}
        }},
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
    },
}