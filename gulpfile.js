var gulp = require('gulp');

gulp.task('OpenUI5 Resources', function () {
    gulp.src(["" +
        "bower_components/openui5-sap.ui.core/resources/**/*",
        "bower_components/openui5-sap.m/resources/**/*",
        "bower_components/openui5-sap.ui.layout/resources/**/*",
        "bower_components/openui5-sap.ui.unified/resources/**/*",
        "bower_components/openui5-themelib_sap_belize/resources/**/*"

    ])
        .pipe(gulp.dest("www/resources"));
});

var ui5preload = require('gulp-ui5-preload');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');

gulp.task('OpenUI5 Preload', function(){
    return gulp.src([
        'www/**/**.+(js|xml)', '!www/resources/**', '!www/Component-preload.js', '!gulpfile.js'
    ])
    .pipe(gulpif('www/**/*.js', uglify()))
    .pipe(ui5preload({
        base : '.',
        namespace : 'pae/logistica'
    }))
    .pipe(gulp.dest('www'))
});

gulp.task('default', ["OpenUI5 Resources", "OpenUI5 Preload"]);