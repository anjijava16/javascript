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
        ui: 'tdd'
      },
      test: {
        options: {
          reporter: 'spec',
          clearRequireCache: true
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

  grunt.registerTask('test', [ 'mocha:test' ]);
  grunt.registerTask('coverage', [ 'istanbul:coverage' ]);
  grunt.registerTask('default', [ 'test' ]);
};
