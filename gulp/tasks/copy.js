export const copy = () => {
    return app.gulp.src(app.path.src.files, {encoding: false})
        .pipe(app.gulp.dest(app.path.build.files))
        .pipe(app.plugins.browserSync.stream());
};