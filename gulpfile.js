const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const SCSS_PATH = 'static/scss/**/*.scss';
const CSS_PATH = 'static/css';

// Compiles scss to css and autoprefixes it
gulp.task('scss', function () {
    gulp.src(SCSS_PATH)
        // convert scss to css
        .pipe(sass({
            outputStyle : 'compressed'
        }))
        // autoprefix css if we use new css
        .pipe(autoprefixer({
            browsers : ['ie > 8']
        }))
        .pipe(gulp.dest(CSS_PATH));
});

// Watch asset folder for changes
gulp.task('watch', ['scss'], function () {
    gulp.watch(SCSS_PATH, ['scss']);
});
