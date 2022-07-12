const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const npmDist = require('gulp-npm-dist');

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
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('css:minify', () => {
    return gulp.src('./public/css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass:compile', 'css:minify'));
});

gulp.task('default', gulp.series('copy:libs', 'sass:compile' , 'css:minify'));