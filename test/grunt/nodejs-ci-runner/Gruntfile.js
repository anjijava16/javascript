module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      build: [
      ],
      source: [
      ],
      test: [
        'test/**/*.js'
      ]
    },

    mocha: {
      options: {
        ui: 'bdd'
      },
      test: {
        options: {
          reporter: 'spec',
          clearRequireCache: true
        },
        src: [ '<%= jshint.test %>' ]
      },
      ci: {
        options: {
          reporter: 'xunit',
          captureFile: 'results/unit/server-tests.xml'
        },
        src: [ '<%= jshint.test %>' ]
      }
    },

    istanbul: {
      options: {
        ui: 'bdd',
        reporter: 'spec',
        coverageFolder: 'results/coverage',
        reportFormats: [ 'html', 'cobertura' ],
        mochaOptions: [
          'test/**/*.js'
        ]
      },
      coverage: [ 'test' ]
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.renameTask('mochaTest', 'mocha');
  grunt.renameTask('mocha_istanbul', 'istanbul');

  // Testing
  grunt.registerTask('test', [ 'mocha:test' ]);

  // Code Coverage
  grunt.registerTask('coverage', [ 'coverage-server' ]);
  grunt.registerTask('coverage-server', [ 'istanbul:coverage' ]);

  // Continuous Integration
  grunt.registerTask('ci', [ 'ci-server' ]);
  grunt.registerTask('ci-server', [ 'mocha:ci', 'coverage-server' ]);

  grunt.registerTask('default', [ 'test' ]);
};
