module.exports = function (grunt) {

  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Configure Grunt
  grunt.initConfig({

    express: {
      all: {
        options: {
          bases: ['C:\\mobileApps\\CoreApps\\core\\www'],
          port: 8080,
          hostname: "0.0.0.0",
          livereload: true
        }
      }
    },

    watch: {
      scripts: {
        files: ['www/css/*.scss','www/js/*js'],
        tasks: ['sass','autoprefixer','jshint','uglify'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    uglify: {
      options: {
        mangle: false,
        compress: {
          drop_console: true
        }
      },
      js: {
        files: [{
          cwd: 'www/js/',
          expand: true,
          src: '*.js',
          dest: 'www/dest/js/'
        }]
      }
    },

    sass: {                              
      dist: {                            
        options: {                       
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'www/css/',
          src: ['*.scss'],
          dest: 'www/dest/css/',
          ext: '.css'
        }]
      }
    },

    csslint: {
      strict: {
        options: {
          import: false
        },
        src: ['www/dest/css/*.css']
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 20 versions']
      },
      dist: { 
        files: {
          'www/dest/css/core.css': 'www/dest/css/core.css'
        }
      }
    },

    jshint: {
        all: ['Gruntfile.js','www/js/*.js']
    },

    wiredep: {
      task: {
        src: [
          'app/views/**/*.html'
        ],
        options: {
        }
      }
    },

    open: {
      all: {
        path: 'http://localhost:8080/index.html'
      }
    }

 });

 // Run Default task(s).
 grunt.registerTask('default', ['jshint','uglify','sass','csslint','autoprefixer','express','open','watch']);

};