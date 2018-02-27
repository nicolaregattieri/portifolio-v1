var gulp = require('gulp'),
sass = require('gulp-sass'),
node_path = '/node_modules/aos/dist' ;

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/temp/styles'));
    
    
});

// vendors


