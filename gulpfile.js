//var config = require('./gulp.config')();
var gulp = require('gulp');
var ts = require('gulp-typescript');
var taskListing = require('gulp-task-listing');

gulp.task('help', taskListing);
gulp.task('default', ['help']);

gulp.task('scripts', function () {
    var tsProject = ts.createProject('tsConfig.json');
    var tsResult = gulp.src('src/**/*.ts').pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('js'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.ts', ['scripts']);
});
