const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
gulp.task('first', function (done) {
    gulp.src('./src/index.html', {
        allowEmpty: true
    }).pipe(gulp.dest('dist'));
    done()
})
gulp.task('htmlmin', function (callback) {
    gulp.src('./src/*.html').pipe(htmlmin({
        collapseWhitespace: true
    })).pipe(gulp.dest('dist'));
    callback();
})