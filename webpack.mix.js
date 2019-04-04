const mix = require('laravel-mix');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass( 'resources/assets/sass/argon/scss/argon.scss', 'public/argon/css' )
   .styles( 'resources/assets/sass/argon/vendor/nucleo/css/nucleo.css', 'public/argon/vendor/nucleo/css/nucleo.css' )
   .styles( 'resources/assets/sass/argon/vendor/font-awesome/css/font-awesome.css', 'public/argon/vendor/font-awesome/css/font-awesome.css' )
   .extract()
   .version()
   .purgeCss({
      enabled: true
   });
