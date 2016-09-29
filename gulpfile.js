var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    nunjucks = require('gulp-nunjucks');

    
function errorLog(error) {
    console.error.bind(error);
    this.emit('end');
}

//Copy Task
//Copies font-awesome
gulp.task('copy', function() {
    gulp.src('src/static_src/font-awesome-4.6.3/**')
        .pipe(gulp.dest('build/static/font-awesome-4.6.3'));
});

//Scripts Task
//Uglifies JS
gulp.task('scripts', function() {
   gulp.src('src/static_src/js/*.js')
   .pipe(uglify())
   .on('error', errorLog)
   .pipe(gulp.dest('build/static/js'));
});

//Styles Task
//Uglifies
gulp.task('styles', function() {
    return gulp.src('src/static_src/sass/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
        }))
    .on('error', errorLog)
    .pipe(gulp.dest('build/static/css'));
});

//Image Task
//Compress
gulp.task('image', function() {
    gulp.src('src/static_src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/static/images'));
});

//Watch Task
//Watches for changings
gulp.task('watch', ['build'], function() {
    gulp.watch('src/static_src/js/*.js', ['scripts']);
    gulp.watch('src/static_src/sass/*.scss', ['styles']);
    gulp.watch('src/static_src/font-awesome-4.6.3/**', ['copy']);
    gulp.watch('src/static_src/images/**/*', ['image']);
});

//Webserver Task
//Runs webserver
gulp.task('webserver', function() {
  gulp.src('build')
    .pipe(webserver({
      fallback: 'index.html',
      host: '0.0.0.0'
    }));
});

//Build Task
gulp.task('build', ['scripts', 'styles', 'copy', 'image']);

gulp.task('default', ['watch']);
