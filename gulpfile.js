var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var requirejsoptimize = require('gulp-requirejs-optimize');

gulp.task('compile-pug', function() {
	gulp.src('pug/os9.pug')
	.pipe(pug())
	.pipe(gulp.dest('dist'));
});

gulp.task('build-scripts', function() {
	gulp.src('scripts/os9.js')
	.pipe(requirejsoptimize())
	.pipe(gulp.dest('dist'));
});

gulp.task('compile-sass', function() {
	gulp.src('sass/**/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('dist'));
})

gulp.task('build', ['build-scripts', 'compile-pug', 'compile-sass']);

gulp.task('dev', function() {
	gulp.watch('sass/**/*.sass', ['compile-sass']);
	gulp.watch('pug/**/*.pug', ['compile-pug']);
});