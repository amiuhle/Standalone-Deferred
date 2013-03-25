module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    coffee: {
      all: {
        options: {
          sourceMap: true
        },
        files: {
          'bin/Deferred.js': 'src/Deferred.coffee'
        }
      }
    },

    uglify: {
      all: {
        options: {
          sourceMap: 'bin/Deferred.min.map',
          sourceMapRoot: 'src/', // the location to find your original source
          sourceMapIn: 'bin/Deferred.map' // input sourcemap from a previous compilation
        },
        files: {
          'bin/Deferred.min.js': 'bin/Deferred.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['coffee', 'uglify']);

};