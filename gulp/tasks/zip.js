import { deleteAsync } from "del";
import zipPlugin from "gulp-zip";

export const zip = () => {
    deleteAsync([`./${app.path.rootFolder}.zip`])
    return app.gulp.src(`${app.path.clean}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Zip",
                message: "Error: <% error.message %>"
            })
        ))
        .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest("./"));
};