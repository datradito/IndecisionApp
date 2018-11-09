//entrada -> salida

//propiedad de node
const path = require('path');
console.log('Inicio')

module.exports = {
    //dnd comienza:
    mode: 'production',
    entry: './src/app.js',
    output: {
        //no podemos usar un path absoluto
        //https://nodejs.org/api/path.html#path_path_join_paths
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module:{
        rules: [{
            loader: 'babel-loader',
            test:  /\.js$/, //revisar "REGULAR EXPRESION"
            exclude: /node_modules/,
        }]
    },
    //CONFIGURO SOURCE MAP PARA DEVELOPMENT
    devtool: 'cheap-module-eval-source-map',
    //CONFIGURO EL REEMPLAZO DE LIVE SERVER
    devServer: {
        contentBase: path.join(__dirname, 'public')
      }

};