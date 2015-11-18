module.exports = function(karma) {
    karma.set({

        frameworks: ['browserify', 'jasmine'],

        files: ['client-dev/tests/*.js'],

        preprocessors: {
            'client-dev/tests/*.js': ['browserify']
        },

        browsers: ['Chrome'],

        reporters: ['spec', 'failed', 'html'],

        browserify: {
            debug: false,
            transform: [ 'brfs' ],
            bundleDelay: 1000
        },

        autoWatch: true,

        client: {
            captureConsole: false
        } 

    });

}