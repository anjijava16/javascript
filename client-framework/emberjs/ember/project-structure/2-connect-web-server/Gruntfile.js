
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

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
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '.tmp/scripts/*.js',
          '<%= william.app %>/*.html',
          '{.tmp,<%= william.app %>}/styles/{,*/}*.css',
          '<%= william.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
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
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, williamConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, 'test'),
              mountFolder(connect, '.tmp')
            ];
          }
        }
      },
      dist: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, williamConfig.dist)
            ];
          }
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.options.port %>'
      }
    },
    replace: {
      app: {
        options: {
          variables: {
            ember: 'bower_components/ember/ember.js',
            ember_data: 'bower_components/ember-data/ember-data.js'
          }
        },
        files: [
          {src: '<%= william.app %>/index.html', dest: '.tmp/index.html'},
          {src: '<%= william.app %>/styles/normalize.css', dest: '.tmp/styles/normalize.css'},
          {src: '<%= william.app %>/styles/style.css', dest: '.tmp/styles/style.css'}
        ]
      },
      dist: {
        options: {
          variables: {
            ember: 'bower_components/ember/ember.prod.js',
            ember_data: 'bower_components/ember-data/ember-data.prod.js'
          }
        },
        files: [
          {src: '<%= william.app %>/index.html', dest: '.tmp/index.html'},
          {src: '<%= william.app %>/styles/normalize.css', dest: '.tmp/styles/normalize.css'},
          {src: '<%= william.app %>/styles/style.css', dest: '.tmp/styles/style.css'}
        ]
      }
    },
    emberTemplates: {
      options: {
        templateName: function (sourceFile) {
          var templatePath = williamConfig.app + '/templates/';
          return sourceFile.replace(templatePath, '');
        }
      },
      dist: {
        files: {
          '.tmp/scripts/compiled-templates.js': '<%= william.app %>/templates/**/*.hbs'
        }
      }
    },
    neuter: {
      app: {
        options: {
          filepathTransform: function (filepath) {
            return williamConfig.app + '/' + filepath;
          }
        },
        src: '<%= william.app %>/scripts/app.js',
        dest: '.tmp/scripts/combined-scripts.js'
      }
    }
  });

  grunt.registerTask('serve', function (target) {
    grunt.task.run([
      'clean',
      'replace:app',
      'neuter',
      'emberTemplates',
      'connect:livereload',
      'open',
      'watch'
    ]);
  });
};