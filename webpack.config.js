var path=require('path');
var ExtractTextPlugin=require('extract-text-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin');

var config={
    entry:{
        main:'./main'
    },
    output:{
        path:path.join(__dirname,'./dist'),
        publicPath:'/dist/',
        filename:'main.js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader', 
                options:{
                    loaders:{
                        less:ExtractTextPlugin.extract({
                            use:['css-loader','less-loader'],
                            fallback:'vue-style-loader'
                        }),
                        css:ExtractTextPlugin.extract({
                            use:['css-loader','less-loader'],
                            fallback:'vue-style-loader'
                        })
                    }
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.less$/,
                loader:'less-loader'
            },
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    use:'css-loader',
                    fallback:'style-loader'
                })
            },
            {
                test:/\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader:'url-loader?limit=1024'
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin({
            filename:'[name].css',
            allChunks:true
        }),
        new VueLoaderPlugin()
    ]
};

module.exports=config;