'use strict';

module.exports = function () {
    $.gulp.task('sass', function () {
        return $.gulp.src('./app/source/style/app.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError({
                title: 'Style'
            }))
            .pipe($.gp.autoprefixer({
                browsers: [
                    'last 3 version',
                    '> 1%',
                    'ie 8',
                    'ie 9',
                    'opera 12.1'
                ]
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('./app/build/assets/css'));
    });
};