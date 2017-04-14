/**
 * Created by ivan on 2016-12-10.
 */
'use strict';
var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    sass = require('gulp-sass'),
    stripDebug = require('gulp-strip-debug'),
    webserver = require('gulp-webserver'),
    ngAnnotate = require('gulp-ng-annotate');

//style paths
var sassFiles = 'app/styles/**/*.scss',
    cssDest = 'dist/styles/',
    jsFiles = 'app/**/*.js';

//////////////////////////////////////////////////////////////////
gulp.task('serve', function () {
    gulp.src('.')
        .pipe(webserver({
            // path: 'app',
            port: '3000',
            livereload: true,
            fallback: './index.html'
        }));
});

gulp.task('sass', function () {
    gulp.src(sassFiles)
        .pipe(concat('styles.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(gulp.dest(cssDest));
});

gulp.task('compress', function (cb) {
    pump([
        gulp.src(jsFiles),
        concat('bundle.js'),
        stripDebug(),
        ngAnnotate({
            mangle: true
        }),
        uglify({
            compress: {
                pure_funcs: ['console.log', 'c.log']
            },
            mangle: true
        }),
        gulp.dest('./dist/js/')
    ],
        cb
    );
});

gulp.task('ngannotate', function () {
    return gulp.src('public/app.js')
        .pipe(ngAnnotate())
        .pipe(gulp.dest('.'));
});

gulp.task('watchAll', function () {
    gulp.watch(sassFiles, ['sass']);
    gulp.watch(jsFiles, ['compress']);
});

gulp.task('default', ['mincss', 'compress']);
gulp.task('dev', ['serve', 'watchAll']);
