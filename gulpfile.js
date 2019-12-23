const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const browsersync = require('browser-sync').create();

gulp.task('sass', () => {
    return gulp.src('dev/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'))
        .pipe(browsersync.stream())
});
gulp.task('imagesMin', () => {
   return gulp.src('dev/images/**/*')
      .pipe(imagemin())//resim boyutunu düşürmek için kullandığımız kod
      .pipe(gulp.dest('dist/images/'))
      .pipe(browsersync.stream());
});

gulp.task('pug', () => {
    return gulp.src('dev/**/*.pug')
        .pipe(pug({
          pretty:true
            // Htmli alt alta verir
        }))
        .pipe(gulp.dest('dist/'))
});
gulp.task('default', () => {
    gulp.watch('dev/**/*.pug',gulp.series('pug'));
    gulp.watch('dev/images/**/*',gulp.series('imagesMin'));
    gulp.watch('dev/scss/**/*.scss',gulp.series('sass'));
    gulp.watch('dist/**/*.html').on('change',browsersync.reload);
    browsersync.init({
        server:{
            baseDir:'./dist'
        }
    })
});