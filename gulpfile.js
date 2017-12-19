var gulp = require('gulp'),
    template = require('gulp-template-html');

gulp.task('default', function () {
    return gulp.src('public/content/*.html')
      .pipe(template('public/templates/template.html'))
      .pipe(gulp.dest('dist'));
});
