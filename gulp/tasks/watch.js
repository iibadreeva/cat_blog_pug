'use strict';

module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./app/source/style/*.scss', $.gulp.series('sass'));
        $.gulp.watch('./app/source/template/**/*.pug', $.gulp.series('pug'))
    });
};