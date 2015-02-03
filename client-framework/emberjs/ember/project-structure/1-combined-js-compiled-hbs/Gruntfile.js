
module.exports = function(grunt){
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // configurable paths
  var williamConfig = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    william: williamConfig,
    watch: {
      emberTemplates: {
        files: '<%= william.app %>/templates/**/*.hbs',
        tasks: ['emberTemplates']
      },
      neuter: {
        files: ['<%= william.app%>/scripts/{,*/}*.js'],
        tasks: ['neuter']
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= william.dist %>/*'
          ]
        }]
      },
      server: '.tmp'
    },
    emberTemplates: {
      compile: {
        options: {
          templateName: function(sourceFile){
            var templatePath = williamConfig.app + '/templates/';
            return sourceFile.replace(templatePath, '');
          }
        },
        files: {
          "dist/compiled-templates.js": "<%= william.app %>/templates/*.hbs"
        }
      }
    },
    neuter: {
      application: {
        src: '<%= william.app %>/scripts/app.js',
        dest: '<%= william.dist %>/combined-scripts.js'
      }
    }
  });

  grunt.registerTask('cleanup', ['clean']);
  grunt.registerTask('build', ['neuter', 'emberTemplates']);
  grunt.registerTask('default', ['build', 'watch']);
};