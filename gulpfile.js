var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    connect = require('gulp-connect'),
    nunjucks = require('gulp-nunjucks');

    
function errorLog(error) {
    console.error.bind(error);
    this.emit('end');
}

//Webserver Task
//Runs webserver
gulp.task('connect', function() {
    connect.server({
        root: 'build',
        host: '0.0.0.0',
        port: 8000,
        index: 'index.html',
        livereload: true
    });
});

//Copy Task
//Copies font-awesome
gulp.task('copy', function() {
    gulp.src('src/static_src/bebas-neue/**')
        .pipe(gulp.dest('build/static/bebas-neue'));
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
    gulp.src('src/static_src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/static/img'));
});

//Nunjucks Task

gulp.task('nunjucks', function() {
    gulp.src('src/*.html')
        .pipe(nunjucks.compile())
        .pipe(gulp.dest('build'))
        .pipe(connect.reload());
});

//Watch Task
//Watches for changings
gulp.task('watch', ['build'], function() {
    gulp.watch('src/static_src/js/*.js', ['scripts']);
    gulp.watch('src/static_src/sass/*.scss', ['styles']);
    gulp.watch('src/static_src/bebas-neue/**', ['copy']);
    gulp.watch('src/static_src/images/**/*', ['image']);
    gulp.watch('src/*.html', ['nunjucks']);
});

//Build Task
gulp.task('build', ['scripts', 'styles', 'copy', 'image', 'nunjucks']);

gulp.task('webserver', ['connect', 'watch']);

gulp.task('default', ['webserver']);
