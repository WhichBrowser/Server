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
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('build', ['browserify:bundle', 'uglify:bundle' ]);
};
