/*
Устанавливаем Webpack:
npm i -g webpack
Устанавливаем babel-loader:
npm install babel-loader babel-core babel-preset-es2015 --save-dev
*/
module.exports = {
  entry: './main',

  output: {
    filename: 'sborka.js'
  },
/* 
Подключаем модуль (взято здесь: https://github.com/babel/babel-loader)
*/    
 module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', 
      query: {
        presets: ['es2015']
      }
    }
  ]
}
};
/*HotReload
    webpack --progress --colors --watch
*/
    