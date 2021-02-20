const path=require('path');
const webpack=require('webpack');
const VueLoaderPlugin=require('vue-loader/lib/plugin')
module.exports={
    //  entry:path.join(__dirname,'./src/main.js'),//打包文件入口
    //  output:{
    //     path:path.join(__dirname,'./dist'),
    //     filename:'bundle.js'
    //  },
     entry:path.join(__dirname,"./src/main.js"),
     output:{
         path:path.join(__dirname,"./dist"),
         filename:"bundle.js"
     },
     devServer:{
         open:true,
         port:3100,
         contentBase:"src",
         hot:true //启用热更新的第一步
     },
     plugins:[
         new webpack.HotModuleReplacementPlugin(), //热更新的模块对象 启用热更新的第三部
         new VueLoaderPlugin(),
    ],
     module:{
         rules:[
             {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            // {
            //   test: /\.less$/,
            //   loader: "less-loader", // compiles Less to CSS
            // },
            // {test:/\.(jpg|png|gif|jpeg|bmp)$/,use:'url-loader?limit=false&name:[name]-[hash:5].[ext]'}
            {
                test:/\.(jpg|png|gif|jpeg|bmp)$/,
                use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 1693502,
                      },
                    },
                  ],
            },
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader', exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'},
         ]
     },
     resolve:{
       alias: {
         //"vue$":"vue/dist/vue.js"
       }
     }
}