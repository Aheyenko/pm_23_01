const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

// Копіювання HTML файлів в папку dist
gulp.task('html', function () {
  return gulp.src("app/*.html",  { base: 'app' })
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

// Об'єднання, компіляція Sass в CSS, додавання префіксів і подальша мінімізація коду
gulp.task('scssTask', function () {
  return gulp.src("app/scss/*.scss")
    .pipe(concat('styles.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

// Об'єднання і стиснення JS-файлів
gulp.task('scripts', function () {
  return gulp.src("app/js/*.js")
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    // .pipe(rename({ suffix: '.min' }))
    
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

//Запуск js-файлу
// Запуск js-файлу
gulp.task('chart-js', function () {
  return gulp.src(['./node_modules/chart.js/dist/chart.umd.js'])
    .pipe(concat('chart.js')) // Об'єднати всі js файли в один файл
    .pipe(gulp.dest('./dist/js/')) // Каталог для збереження оброблених файлів
    .pipe(browserSync.stream());
});


// Стискання зображень
gulp.task('imgs', function () {
  return gulp.src("app/img/*.{jpg,jpeg,png,gif}")
     .pipe(imagemin({
       progressive: true,
       svgoPlugins: [{ removeViewBox: false }],
       interlaced: true
     }))
    .pipe(gulp.dest("dist/images"))
    .pipe(browserSync.stream());
});

// Відстежування за змінами у файлах
gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: ["./app", "./dist"]
        }
    });
  gulp.watch("app/*.html", gulp.series('html'));
  gulp.watch("app/scss/*.scss", gulp.series('scssTask'));
  gulp.watch("app/js/*.js", gulp.series('scripts'));
  gulp.watch("app/images/*.{jpg,jpeg,png,gif}", gulp.series('imgs'));
  gulp.watch("dist").on('change', browserSync.reload);
  
});

// Запуск тасків за замовчуванням
gulp.task('default', gulp.series('html', 'scssTask', 'scripts', 'chart-js','imgs', 'watch'));