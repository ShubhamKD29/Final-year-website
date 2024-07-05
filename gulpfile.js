// const gulp = require('gulp');
// const requireDir = require('require-dir');

// requireDir('./gulp');

// /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// |  Compile
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
// gulp.task('compile', gulp.parallel('style', 'script', 'script:webpack', 'vendor'));
// gulp.task('compile:all', gulp.parallel('compile', 'pug'));

// /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// |  Deploy
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
// gulp.task('build', gulp.series('clean:build', 'build:static', 'compile:all'));
// gulp.task('build:test', gulp.series('build', 'watch'));
// gulp.task('live', gulp.series('clean:live', 'build', 'build:push'));

// /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// |  Run development environment
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
// gulp.task('default', gulp.series('clean', 'compile', 'watch'));


const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', gulp.series('sass'));
