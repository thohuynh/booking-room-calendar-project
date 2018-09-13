let mix = require('laravel-mix');

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
mix.js('resources/assets/js/app.js', 'public/js');
// Home
mix.sass('resources/assets/sass/app.scss', 'public/scss')
mix.styles([
  'resources/assets/css/broom.css',
  'resources/assets/css/fonts.css',
  'resources/assets/css/fullcalendar.css',
  'resources/assets/css/scheduler.min.css',
], 'public/css/all.css').copyDirectory('resources/assets/images', 'public/images');
mix.scripts([
  'resources/assets/js/moment.min.js',
  'resources/assets/js/jquery.min.js',
  'resources/assets/js/fullcalendar.js',
  'resources/assets/js/scheduler.min.js',
  'resources/assets/js/bootstrap4.js',
  'resources/assets/js/sweetalert2.js'
], 'public/js/all.js');

mix.js('resources/assets/js/Home.js', 'public/js/home.js')

//Admin
mix.styles([
  'vendor/almasaeed2010/adminlte/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css',
  'vendor/almasaeed2010/adminlte/dist/css/AdminLTE.min.css',
  'vendor/almasaeed2010/adminlte/dist/css/skins/_all-skins.min.css',
  'vendor/almasaeed2010/adminlte/bower_components/bootstrap-colorpicker/dist/css/bootstrap-colorpicker.min.css',
], 'public/admin/css/admin-vendor.css');
mix.scripts([
  'vendor/almasaeed2010/adminlte/bower_components/jquery/dist/jquery.min.js',
  'vendor/almasaeed2010/adminlte/bower_components/bootstrap/dist/js/bootstrap.min.js',
  'vendor/almasaeed2010/adminlte/bower_components/datatables.net/js/jquery.dataTables.min.js',
  'vendor/almasaeed2010/adminlte/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js',
  'vendor/almasaeed2010/adminlte/bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
  'vendor/almasaeed2010/adminlte/bower_components/fastclick/lib/fastclick.js',
  'vendor/almasaeed2010/adminlte/dist/js/adminlte.min.js',
  'resources/assets/js/sweetalert2.js'

], 'public/admin/js/admin-vendor.js');

mix.js('resources/assets/admin/js/adminAll.js', 'public/admin/js/adminAll.js')


if (mix.inProduction()) {
  mix.version();
} else {
  mix.sourceMaps();
}
