import gulp from 'gulp'
import sass from 'gulp-sass'
import plumber from 'gulp-plumber'
import autoprefixer from 'gulp-autoprefixer'
import notify from 'gulp-notify'

// sass task
gulp.task('sass', () => {
	gulp.src('./public/sass/*.sass')
		.pipe(sass())
		.pipe(plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./public/css'))
})

// default task
gulp.task('default', () => {
	gulp.watch('./public/sass/*.sass', ['sass'])
})