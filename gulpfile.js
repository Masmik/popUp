var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('src/css/*.scss')
        .pipe(sass())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('img', function () {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});


gulp.task('js', function () {
    return gulp.src([
        'src/js/*.js'
    ]).pipe(babel({
        presets: ['@babel/env']
    }))
        .pipe(concat('main.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function () {
    gulp.watch("src/css/**/*.scss", ['sass']);
    gulp.watch("src/img/**/*", ['img']);
    gulp.watch("src/js/*.js", ['js']);
});


gulp.task("default", ['img', 'sass', 'js', 'watch']);

