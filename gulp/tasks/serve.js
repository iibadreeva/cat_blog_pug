'use strict'

module.exports = function () {
    $.gulp.task('serve', function () {
        $.browserSync.init({
            open: true,
            port: 9090,
            server: {
                baseDir: 'app'
            }
            // serve: './build'
        })
        $.browserSync.watch('app', $.browserSync.reload);
    });
}