const gulp = require('gulp');
const prettier = require('gulp-prettier');

const paths = {
   dest: './src/',
   scripts: './src/*.js'
};

function prettify() {
   return gulp
      .src(paths.scripts)
      .pipe(
         prettier({ parser: 'typescript' }).on('error', error =>
            console.log('Prettier failed: \n', error.message)
         )
      )
      .pipe(gulp.dest(paths.dest));
}

exports.prettify = prettify;
