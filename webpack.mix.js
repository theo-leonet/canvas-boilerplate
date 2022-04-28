const mix = require('laravel-mix');

mix.ts('src/ts/index.ts', 'js/index.js').sourceMaps()
    .sass('src/scss/main.scss', 'css').sourceMaps()
    .setPublicPath('dist').setResourceRoot('../');