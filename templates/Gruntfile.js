module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            bundle: {
                src: 'src/WhichBrowser.js',
                dest: 'dist/bundle.js',

                options: {
                    browserifyOptions: {
                        standalone: 'WhichBrowser'
                    }
                }
            }
        },

        uglify: {
            bundle: {
                src: 'dist/bundle.js',
                dest: 'dist/bundle.js',

                options: {
                    mangle: false,
                    preserveComments: 'some'
                }
            }
        },

        mochaTest: {
            test: {
                src: ['test/*.js']
            }
        },

        jshint: {
            all: ['src/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('build', ['browserify:bundle', 'uglify:bundle']);
    grunt.registerTask('test', ['jshint', 'mochaTest']);
};
