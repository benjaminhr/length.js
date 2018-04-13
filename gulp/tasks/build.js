const gulp = require('gulp');
const runSequence = require('run-sequence');
const version = require('../config');

gulp.task('build', function () {
  if (!version || version.split('.').length !== 3) {
    throw Error('\n\n    Incorrect version number. Use:\n    $ npm run build -- --version 1.2.3\n    or\n    $ gulp build --version 1.2.3\n');
  }
  return runSequence('stringReplacePackageJson', 'stringReplacePackageLock', 'stringReplaceLengthJs', 'uglify');
});
