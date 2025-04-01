import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import sourcemaps from 'gulp-sourcemaps'
import dartSass from 'sass'

const sass: any = gulpSass(dartSass)

const compileSass = (): any => {
  return gulp.src('src/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/styles/css'))
}

const watchSass = (): void => {
  gulp.watch('src/styles/**/*.scss', compileSass)
}

export default gulp.series(compileSass, watchSass)
