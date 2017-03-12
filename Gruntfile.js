module.exports = function(grunt) {
    grunt.initConfig({

        watch: {
            options: {
                livereload: true
            },
            express: {
                files: ['server.js'],
                tasks: ['express:server'],
                options: {
                    spawn: false
                }
            },
            js: {
                files: ['prod/js/**/*.js'],
                tasks: ['uglify']
            },
            sass: {
                files: ['prod/scss/*.scss'],
                tasks: ['sass']
            },
            css: {
                files: ['prod/css/*.css'],
                tasks: ['cssmin']
            },
            views: {
                files: ['prod/index.html', 'prod/views/*.html'],
                tasks: ['htmlmin']
            }
        },

        express: {
            server: {
                options: {
                    script: 'server.js'
                }
            }
        },

        uglify: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'prod/js/',
                    src: '**/*.js',
                    dest: 'build/js/',
                    ext: '.min.js'
                }]
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'prod/css',
                    src: '*.css',
                    dest: 'build/css/',
                    ext: '.min.css'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'prod/',
                    src: '**/*.html',
                    dest: 'build/',
                    ext: '.html'
                }]
            }
        },

        sass: {
            dist: {
                files: [{
			expand: true,
			cwd: 'prod/scss/',
			src: 'main.scss',
			dest: 'prod/css/',
			ext: '.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['express', 'watch']);
    grunt.registerTask('start', ['uglify', 'sass', 'cssmin', 'htmlmin', 'express', 'watch']);
};
