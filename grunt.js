module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
    
  // Project configuration.
  grunt.initConfig({
    jshint: {
        code: {
        src: ['tasks/**/*.js']
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true,
        strict: false
      },
      globals: {}
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Default task.
  grunt.registerTask('default', 'jshint');
};
