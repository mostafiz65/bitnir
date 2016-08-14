// Include gulp
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

// Include Our Plugins
var sass = require('gulp-sass');

// Compile Our Sass
var sassSrc = './assets/scss/style.scss',
	sassDes = './assets/css';

gulp.task('sass', function() {
    return gulp
    		.src(sassSrc)
    		.pipe(sass())
    		.pipe(gulp.dest(sassDes));
});

// Default Task
gulp.task('default', ['sass']);