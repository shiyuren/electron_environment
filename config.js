const path = require('path')
const pkg = require('./app/package.json')
/**
 * 打包配置
 */
const config = {
  building: {
    appVersion: pkg.version,
    arch: ['x64'], // ia32, x64, armv7l, all
    asar: true,
    dir: path.join(__dirname, 'app'), // Directory of the app
    icon: path.join(__dirname, 'app/icons/icon'),
    ignore: /src|main.ejs|icons/,
    out: path.join(__dirname, 'builds'),
    overwrite: true,
    platform: process.env.PLATFORM_TARGET || 'win32',
    name: pkg.product
  }
}
module.exports=config;
