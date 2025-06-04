const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const less = require('gulp-less');
const rename = require('gulp-rename');

// Compile SCSS
gulp.task('scss', function () {
  return gulp
    .src('src/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist'));
});

// Compile LESS
gulp.task('less', function () {
  return gulp
    .src('src/style.less')
    .pipe(less())
    .pipe(rename('style-from-less.css'))
    .pipe(gulp.dest('dist'));
});

// Watch files
gulp.task('watch', function () {
  gulp.watch('src/**/*.scss', gulp.series('scss'));
  gulp.watch('src/**/*.less', gulp.series('less'));
});

gulp.task('default', gulp.series('scss', 'less', 'watch'));
