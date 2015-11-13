module.exports = function(karma) {
  karma.set({
 
    frameworks: [ 'browserify', 'jasmine' ],
    files: ['client-dev/tests/*.js'],
    preprocessors: {
      'client-dev/tests/*.js': [ 'browserify' ]
    },
    browsers: ['PhantomJS'],
    reporters: ['spec', 'failed', 'html'],
    browserify: {
      debug: false,
      transform: [ 'brfs' ]
    },
    autoWatch: true,
    client: {
      captureConsole: false
    }
  });
}