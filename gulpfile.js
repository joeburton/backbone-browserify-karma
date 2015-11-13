"use strict";

// Include gulp
var gulp = require('gulp');

// Include plugins
var uglify      = require('gulp-uglify');
var source      = require('vinyl-source-stream'); // makes browserify bundle compatible with gulp
var streamify   = require('gulp-streamify');
var browserify  = require('browserify');
var karma  = require('karma');

// Concatenate, Browserify & Minify JS
gulp.task('scripts', function() {
    return browserify('./client-dev/js/app.js').bundle()
        .pipe(source('app.min.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('test', function () {
  return karma.server.start({
    configFile: __dirname+'/karma.conf.js'
  });
});