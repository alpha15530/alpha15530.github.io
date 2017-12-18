require('es6-promise').polyfill();

var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var pump = require('pump');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('clean:public', function() {
    del('public');
});

gulp.task('clean:css', function() {
    del('public/css/*.css');
});

gulp.task('clean:js', function() {
    del('public/js/*.js');
});

gulp.task('scss-compile', function(cb) {
    pump([
        gulp.src('./dev/style/*.scss'),
        sass.sync({
            outputStyle: 'compressed'
        }).on('error', sass.logError),
        gulp.dest('./public/css/')
    ], cb);
});

gulp.task('babel', function(cb) {
    pump([
        gulp.src('./dev/scripts/**/*.js'),
        babel({
            "presets": ['es2015']
        }),
        uglify(),
        gulp.dest('./public/js/')
    ], cb);
});

gulp.task('build:css', function() {
    return runSequence(
        'clean:css',
        'scss-compile'
    );
});

gulp.task('build:js', function() {
    return runSequence(
        'clean:js',
        'babel'
    );
});

gulp.task('watch', function(cb) {
    gulp.watch([
        './dev/style/*.scss'
    ], [
        'scss-compile'
    ]);
});

gulp.task('default', function() {
    return runSequence(
        'clean:public',
        'build:css',
        'build:js'
    );
});