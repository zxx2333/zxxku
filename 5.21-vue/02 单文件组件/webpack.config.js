// 暴露接口
module.exports = {
    // resolve配置webpack如何查找文件
    resolve: {
        // 扩展名
        // extensions: ['.js', '.scss', '.es', '.css', '.less'],
        extensions: ['.js','.vue'],
        // 配置别名
        alias: {
            // 注意此时的 '/'为E盘
            vue$: '/node_modules/vue/dist/vue.js',
            vuex$: '/node_modules/vuex/dist/vuex.js',
            
        }
    },
    // 入口文件
    entry: {
        // "01": "./modules/01.js",
        "main": "./modules/main.js",
    },
    // 出口配置
    output: {
        // 文件名
        filename: "[name].js"
    },
    // 加载机
    module: {
        // 匹配规则
        rules: [
            // ES6
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // 排除文件夹
                exclude: '/node_modules',
                // 包含指定的文件夹
                include: '/modules',
                options: {
                    presets: ['env']
                }
            },
            // vue
            {
                test: /\.vue$/,
                loader:'vue-loader'
            },
            // css
            {
                test: /\.css$/,
                // loader: 'style-loader!css-loader'
                use: ['style-loader', 'css-loader']
            },
            // scss
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // less
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
        ]
    },
    // 模式
    mode: 'development',

    //跨域请求的服务器
    devServer:{
        //配置我们自己的域名
        host:'localhost',
        //配置端口号
        port:8080,
        //是否打开浏览器
        open:true,
        //配置跨域请求的代理
        proxy:{
            // 可以存在多个被代理的请求
            // 键 代表请求的地址(键要使用贝蒂不存的在文件，用来存储数据); 值 代表请求的配置
            '/data/zxx':{
                //请求的目标路径,真正要请求的路径
                target:'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
                //是否重写路径，默认会把键值，追加到target的值后面。https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg/data/data.json  这不是我们想要的效果，所以要重写，将最后的键设置为空字符串
                pathRewrite:{
                    changeOrigin:true,
                    //正则匹配字符
                    '^/data/zxx' : '',
                },
                // 是否进行https的校验,此处写false是因为没使用https协议，用的是http协议
                secure: false,
            },

        }
    }
}