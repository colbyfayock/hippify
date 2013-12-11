module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*!\n' +
                ' * <%= pkg.name %> - <%= pkg.description %>\n' +
                ' * Version: <%= pkg.version %>\n' +
                ' * <%= pkg.author %>\n' +
                ' */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};