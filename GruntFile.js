module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            output: {
                option: {
                    sourcemap: 'none'
                },
                files: {
                    './build/css/test.css': './src/css/testcss.scss'
                }
            }

        },
        concat:{
            options:{
                // separator:';'
            },
            build:{
                src:['src/js/*.js'],
                dest:'./build/js/total.js'
            }
        },
        uglify: {
            compressjs: {
                files: {
                    './dist/js/total.min.js': ['./build/js/total.js']
                }
            }
        },
        jshint: {
            all: ['./global.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('outputcss', ['sass']);
    grunt.registerTask('concatjs', ['concat']);
    grunt.registerTask('conpressJS',['concat','jshint','uglify'])


    grunt.registerTask('default');


}