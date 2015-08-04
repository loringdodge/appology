var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var karma = require('karma').server;
var angularProtractor = require('gulp-angular-protractor');

// Paths to SCSS Files - Used later for watch
var paths = {
  sass: ['./scss/**/*.scss'],
  js: ['./www/js/**/*.js']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  // Compiles and minifies standard ionic css
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))

  // Compiles and minifies custom css styles
  gulp.src('./scss/style.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', function(){
      done();
    });
});

gulp.task('js', function(done) {
  gulp.src('')
    .pipe()
})

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass','js']);
});

// Unit testing
gulp.task('test', function(done) {
  karma.start({
    configFile: __dirname + '/tests/unit/my.conf.js',
    singleRun: true
  }, function() {
    done();
  });
});

// e2e testing
gulp.task('prot', function(done) {
  gulp.src(['./tests/*.js'])
  .pipe(angularProtractor({
      'configFile': 'tests/e2e/protractor.config.js',
      'args': ['--baseUrl', 'http://127.0.0.1:8000'],
      'autoStartStopServer': true,
      'debug': true
  }))
  .on('error', function(e) { throw e })
  .on('end', done);
});

// Emulates the ionic app - ios only
gulp.task('ion', function() {
  sh.exec('ionic emulate ios');
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
