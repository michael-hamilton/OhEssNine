//Requires
var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var requireJS =  require('gulp-requirejs');
var requireJSOptimize = require('gulp-requirejs-optimize');
var bowerRequireJS = require('bower-requirejs');

//Compiles main pug template located at ./pug/os9.pug
gulp.task('compile-pug', function() {
	gulp.src('pug/os9.pug')
	.pipe(pug())
	.pipe(gulp.dest('dist'));
});

//Compiles sass files located in ./sass
gulp.task('compile-sass', function() {
	gulp.src('sass/**/*.sass')
	.pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('dist'));
});

//Builds script file using requirejs
gulp.task('build-scripts', function() {
		gulp.src('scripts/os9.js')
		.pipe(requireJSOptimize())
		.pipe(gulp.dest('scripts/os9.js'));
});

gulp.task('requirejs', function() {
	bowerRequireJS({config:'scripts/config.js'}, function(config) {
		requireJS(config)
		.pipe(gulp.dest('./dist/os9.js'));
	});
});

gulp.task('build', ['build-scripts', 'compile-pug', 'compile-sass']);

gulp.task('dev', function() {
	gulp.watch('sass/**/*.sass', ['compile-sass']);
	gulp.watch('pug/**/*.pug', ['compile-pug']);
});