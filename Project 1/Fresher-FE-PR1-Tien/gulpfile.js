// Declare modules:
const { src, dest, parallel, watch, series } = require("gulp"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass")(require("sass"));
(pug = require("gulp-pug")), (browserSync = require("browser-sync").create());

// Declare files destination:
const FilesPath = {
  sassFiles: "src/scss/**/*.scss",
  jsFiles: "src/js/*.js",
  htmlFiles: "src/pug/pages/*.pug",
};
const { sassFiles, jsFiles, htmlFiles } = FilesPath;

// Compile sass files, link files, save to sass folder, auto sync browser:
function sassTask() {
  return src(sassFiles)
    .pipe(sass())
    .pipe(concat("style.css"))
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream());
}

// Compile pug files, save to pug folder:
function htmlTask() {
  return src(htmlFiles)
    .pipe(pug({ pretty: true }))
    .pipe(dest("dist"))
    .pipe(browserSync.stream());
}

// link all js files to 1 file:
function jsTask() {
  return src(["node_modules/bootstrap/dist/js/bootstrap.min.js", jsFiles])
    .pipe(concat("all.js"))
    .pipe(dest("dist/js"));
}

// copy assets to dist folder
function assetsTask() {
  return src("assets/**/*").pipe(dest("dist/assets"));
}

// live server:
function serve() {
  browserSync.init({ server: { baseDir: "./dist" } });
  watch(sassFiles, sassTask);
  watch(jsFiles, jsTask);
  watch(htmlFiles, htmlTask);
}

// gulp order:
exports.js = jsTask;
exports.sass = sassTask;
exports.html = htmlTask;
exports.assets = assetsTask;
exports.default = series(parallel(htmlTask, sassTask, jsTask, assetsTask));
exports.serve = series(serve, parallel(htmlTask, sassTask, jsTask, assetsTask));
