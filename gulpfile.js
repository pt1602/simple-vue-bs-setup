var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var npmDist = require('gulp-npm-dist');

gulp.task('copy:libs', function () {
    return gulp.src(npmDist({
            copyUnminified: false,
            replaceDefaultExcludes: true,
            excludes: [
                'src/**/*',
                'examples/**/*',
                'example/**/*',
                'demo/**/*',
                'spec/**/*',
                'docs/**/*',
                'tests/**/*',
                'test/**/*',
                'Gruntfile.js',
                'gulpfile.js',
                'package.json',
                'package-lock.json',
                'bower.json',
                'composer.json',
                'yarn.lock',
                'webpack.config.js',
                'README',
                'LICENSE',
                'CHANGELOG',
                '*.yml',
                '*.md',
                '*.coffee',
                '*.ts',
                '*.less'
            ]
        }), {
            base: './node_modules'
        })
        .pipe(gulp.dest('./public/libs'));
});

gulp.task('sass:compile', function () {
    return gulp.src('./scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass:compile'));
});