module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: grunt.file.readJSON('.jshintrc'),
      all: [
        'Gruntfile.js',
        'tasks/**/*.js',
        'tests/**/*.js'
      ]
    },

    copy: {
      test: {
        expand: true,
        cwd: 'test/fixtures/',
        src: '**',
        dest: '.tmp/'
      }
    },

    'json-minify': {
      default_options: {
        files: '.tmp/default_options.json'
      },
      duplicate_keys: {
        files: '.tmp/duplicate_keys.json'
      }
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Default task.
  grunt.registerTask('default', 'test');
  grunt.registerTask('test', ['jshint', 'copy', 'json-minify', 'nodeunit']);
};
