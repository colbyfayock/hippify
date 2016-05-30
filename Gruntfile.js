module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
        options: {
            banner: '/*!\n' +
                ' * <%= pkg.name %> - <%= pkg.description %>\n' +
                ' * http://colbyfayock.github.io/hippify/\n' +
                ' * Version: <%= pkg.version %>\n' +
                ' * <%= pkg.author %>\n' +
                ' */\n'
        },
        build: {
            src: 'hippify/<%= pkg.name %>.js',
            dest: 'hippify/<%= pkg.name %>.min.js'
        }
    },
    watch: {
        scripts: {
            files: ['hippify/hippify.js'],
            tasks: ['default'],
            options: {
                spawn: false,
            },
        },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify']);

};