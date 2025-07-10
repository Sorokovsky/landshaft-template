import fs from "node:fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Fonts",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fonter({
            formats: ["ttf"]
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`));
};

export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Fonts",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(fonter({
            formats: ["woff"]
        }))
        .pipe(app.gulp.dest(app.path.build.fonts))
        .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(app.path.build.fonts));
};

export const fontsStyle = () => {
    let fontsFile = `${app.path.srcFolder}/sass/fonts.sass`
    fs.readdir(app.path.build.fonts, function (err, fontsFiles) {
        if (fontsFiles) {
            if (!fs.existsSync(fontsFile)) {
                fs.writeFile(fontsFile, "", cb);
                let newFileOnly;
                for (let i = 0; i < fontsFiles.length; i++) {
                    let fontFileName = fontsFiles[i].split(".")[0];
                    if (newFileOnly !== fontFileName) {
                        let fontName = fontFileName.split("-")[0] ? fontFileName.split("-")[0] : fontFileName;
                        let fontWeight = (fontFileName.split("-")[1] ? fontFileName.split("-")[1] : fontFileName).toLowerCase();
                        let italic = "italic";
                        let normal = "normail";
                        let fontStyle = fontWeight.includes(italic) ? italic : normal;
                        fontWeight.replace(italic, "");
                        switch (fontWeight) {
                            case "thin":
                                fontWeight = 100;
                                break;
                            case "extralight":
                                fontWeight = 200;
                                break;
                            case "light":
                                fontWeight = 300;
                                break;
                            case "medium":
                                fontWeight = 500;
                                break;
                            case "semibold":
                                fontWeight = 600;
                                break;
                            case "bold":
                                fontWeight = 700;
                                break;
                            case "extrabold":
                            case "heavy":
                                fontWeight = 800;
                                break;
                            case "black":
                                fontWeight = 900;
                                break;
                            default:
                                fontWeight = 400;
                                break;
                        }
                        fs.appendFile(fontsFile, `@font-face\n\tfont-family: ${fontName}\n\tfont-display: swap\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff")\n\tfont-weight: ${fontWeight}\n\tfont-style: ${fontStyle}\n\r\n`, cb);
                        newFileOnly = fontFileName;
                    } else {
                        console.log("fonts.sass already exits.");
                    }
                }
            }
        } else {
            fs.appendFile(fontsFile, "", cb);
        }
    });

    return app.gulp.src(app.path.srcFolder);
    function cb() { };
};