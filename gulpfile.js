const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const concat = require('gulp-concat'); 
const uglify = require('gulp-uglify'); 

// Sass Task
function scssTask() {
    return src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('dist/'));
}

// JavaScript Task
function jsTask() {
    return src('app/script/**/*.js')
        .pipe(terser())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('dist/'));
}

// Watch Task
function watchTask() {
    watch(['app/sass/**/*.scss', 'app/script/**/*.js'], series(scssTask, jsTask));
}

// Default Gulp Task
exports.default = series(
    scssTask,
    jsTask,
    watchTask
); 