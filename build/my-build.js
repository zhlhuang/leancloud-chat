var webpack = require('webpack')
var webpackConfig = require('./my-webpack')
webpack(webpackConfig, function (err, stats) {
    if (err) throw err
    console.log('build  components success')
})