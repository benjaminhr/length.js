const gulp = require('gulp');
const replace = require('gulp-replace');
const version = require('../config');

gulp.task('stringReplacePackageJson', function () {
  return gulp.src('./package.json')
    .pipe(replace(/"version": .*/, '"version": "' + version + '",'))
    .pipe(gulp.dest('.'));
})

gulp.task('stringReplacePackageLock', function () {
  return gulp.src('./package-lock.json')
    .pipe(replace(/("name": "length.js",\s  "version": )".*",/, '$1"' + version + '",'))
    .pipe(gulp.dest('.'));
})

gulp.task('stringReplaceLengthJs', function () {
  return gulp.src('./length.js')
    .pipe(replace(/length.js v.* /, 'length.js v' + version + ' '))
    .pipe(replace(/version = ".*"/, 'version = "' + version + '"'))
    .pipe(gulp.dest('.'));
})
