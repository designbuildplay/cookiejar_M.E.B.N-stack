/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp  = require('gulp');
var config= require('../config');

gulp.task('watch', ['setWatch'], function() {
  gulp.watch(config.compass.src, ['compass']);
  // gulp.watch(config.images.src, ['images']);
  gulp.watch(config.markup.src, ['markup']);
  gulp.watch(config.scripts.src, ['scripts']);
  gulp.watch(config.templates.src, ['templates']);
});
