const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// index.htmlをoutputに書き出すプラグイン
const HtmlWebpackPlugin = require('html-webpack-plugin');
//  ビルドの際outputディレクトリのファイル・フォルダを削除するプラグイン

module.exports = {
    mode: 'development',
    entry: './src/index.js',//buildするファイル
    output: {
        filename: 'bundle.js',//build後のファイル名
        path: path.join(__dirname, '../django_project/django_app/static/js') //buildファイルが作成される場所
    },
    module: {
        rules: [
          {
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react' 
                ],
                plugins: ['@babel/plugin-syntax-jsx'] 
              }
            }
          },
          {
            test: /\.(css|scss)/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              {
                loader: 'css-loader',
              },
              {
                loader: 'sass-loader',
              },
            ],
          },
          {
            test: /\.pug/,
            use: [
              {
                loader: 'html-loader',
              },
              {
                loader: 'pug-html-loader',
                options: {
                  pretty: true,
                },
              },
            ],
          },
        ]
      },
      resolve: {
        extensions: ['.js', '.jsx', '.json']
      },
      plugins: [
        // html,cssのファイルの数だけnewで作り、template,filenameを設定する
        // cssファイルをoutput先へ別ファイルとして書き出す
        new MiniCssExtractPlugin({
          filename: './stylesheets/[name].css',
        }),
        new HtmlWebpackPlugin({
          // templateで指定したファイルを元にhtmlwebpackpluginがoutputにHTMLフォルダを生成する。
          template: './src/templates/index.pug',
          filename: 'index.html',
        })
      ],
};