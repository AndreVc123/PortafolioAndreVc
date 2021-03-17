const { series, src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const concat = require('gulp-concat');

//Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//Utilidades JS
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');


function scss() {
    return src('src/scss/app.scss')
    .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe( sourcemaps.write('.'))
        .pipe(dest('./build/css'))
}

function javascript() {
    return src('src/js/app.js')
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe( rename({suffix: '.min'}))
        .pipe(dest('./build/js'))
}

function javascript() {
    return src('src/js/proyectos.js')
        .pipe(concat('proyectosBundle.js'))
        .pipe(terser())
        .pipe( rename({suffix: '.min'}))
        .pipe(dest('./build/js'))
}

function watchArchivo() {
    watch('src/scss/**/*.scss', scss)
    watch('src/js/**/*.js', javascript)
}

exports.default = series(scss, javascript, watchArchivo);