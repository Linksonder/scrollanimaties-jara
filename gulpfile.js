'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./**/*.scss', ['sass']);
});

gulp.task('default', function(){
      gulp.start('sass', 'sass:watch');
});