const gulp = require('gulp')

const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')
const webpack = require('webpack-stream')
const babel = require('gulp-babel')
const minify = require('gulp-babel-minify')

gulp.task('css', () => {
  return gulp.src(['src/css/main.css', 'src/css/win-messages.css', 'src/css/mobile.css'])
    .pipe(concat('bundle.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/'))
})

gulp.task('js', () => {
  return gulp.src('src/index.js')
    .pipe(webpack({
      output: { filename: 'bundle.js' }
    }))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(minify())
    .pipe(gulp.dest('dist/'))
});

gulp.task('default', ['css', 'js'])
