var gulp = require("gulp"),
    concat = require("gulp-concat"),
    connect = require("gulp-connect"),
    less = require("gulp-less"),
    pathReq = require("path"),
    fs = require("fs");

var path = {};

path.dev = {};

path.public = {};

path.dev.app = "dev/";

path.dev.styles = {};

path.dev.styles.components = "dev/components/";

path.dev.bower = "bower_components/";

path.public.js = "js/";
path.public.css = "css/";


var thirdPartyLibs = [
    path.dev.bower + "jquery/dist/jquery.min.js",
    path.dev.bower + "bootstrap/dist/js/bootstrap.min.js",
    path.dev.bower + "angular/angular.js",
    path.dev.bower + "angular-ui-router/release/angular-ui-router.min.js",
    path.dev.bower + "angular-material/angular-material.min.js"
];

var scripts = [
    path.dev.app + "app.js",
    path.dev.app + "*.js",
    path.dev.app + "**/*.js",
    path.dev.app + "**/*.*.js"
];

var stylesSource = [
    path.dev.bower + "bootstrap/dist/css/bootstrap.min.css",
    path.dev.bower + "angular-material/angular-material.min.css",
    path.dev.app + "assets/css/roboto.css"
]

gulp.task("css-Components", function() {
    return gulp.src(path.dev.styles.components + "components.less")
        .pipe(less({
            paths: [pathReq.join(__dirname, "less", "includes")],
            compress: true
        }))
        .pipe(gulp.dest(path.public.css));
});


gulp.task("cssConcatThirdPartyStyles", function() {
    return gulp.src(stylesSource)
        .pipe(concat("ThirdPartyStyles.css"))
        .pipe(gulp.dest(path.public.css));
});

gulp.task("jsConcatThirdPartyLibs", function() {
    return gulp.src(thirdPartyLibs)
        .pipe(concat("thirdPartyLibs.js"))
        .pipe(gulp.dest(path.public.js));
});

gulp.task("jsConcatScripts", function() {
    return gulp.src(scripts)
        .pipe(concat("scripts.js"))
        .pipe(gulp.dest(path.public.js))
        .pipe(connect.reload());
});

gulp.task("connect", function() {
    connect.server({
        root: "",
        port: 3030,
        livereload: true
    });
});


gulp.task("watch", function() {
    gulp.watch(thirdPartyLibs, ["thirdPartyLibs"]);
    gulp.watch([
        path.dev.app + "app.js",
        path.dev.app + "**/*.js",
        path.dev.app + "**/*.*.js"
    ], ["jsConcatScripts"]);
    gulp.watch([path.dev.styles.components + "**/*.less"], ["css-Components"]);
});

gulp.task("start", ["jsConcatThirdPartyLibs", "jsConcatScripts", "cssConcatThirdPartyStyles", "css-Components", "connect", "watch"]);