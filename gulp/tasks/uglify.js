const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('uglify', function () {
  return gulp.src('./length.js')
    .pipe(uglify({
      mangle: true,
      output: {
        comments: /^!/
      }
    }))
    .pipe(rename({
      suffix: ".min",
    }))
    .pipe(gulp.dest('./min'));
})
