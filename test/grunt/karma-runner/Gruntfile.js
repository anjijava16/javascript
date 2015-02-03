module.exports = function(grunt) {
  var _ = require('lodash');

  // File lists
  var srcJs = _.compact([
    'src/namespace.js',
    'src/calc.js'
  ]);

  // Load grunt plugins (from package.json)
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    karma: {
      options: {
        basePath: '',
        autoWatch: false,
        singleRun: true,
        frameworks: [ 'mocha', 'proclaim' ],
        detectBrowsers: { enabled: false },
        browsers: [ 'PhantomJS' ],
        reporters: [ 'dots' ],
        files: _.flatten([
          // Sources
          srcJs,

          // Framework
          'test/mocha-config.js',

          // Unit Tests
          'test/unit/**/*.js'
        ])
      },

      // Standard run of tests with more verbose output
      test: {
        reporters: [ 'mocha' ]
      },

      // Generate a coverage report
      coverage: {
        // note: need to include multiple folder to show code coverage
        preprocessors: { '{app,src}/**/*.js': [ 'coverage' ] },
        reporters: [ 'dots', 'coverage' ],
        coverageReporter: {
          dir: 'results/coverage',
          reporters: [
            { type: 'text' },
            { type: 'html' }
          ]
        }
      },

      // Generate XML reports for use with continuous integration
      ci: {
        colors: false,
        preprocessors: { '{app,src}/**/*.js': [ 'coverage' ] },
        reporters: [ 'dots', 'junit', 'coverage' ],
        junitReporter: {
          outputFile: 'results/unit/karma-junit.xml'
        },
        coverageReporter: {
          dir: 'results/coverage',
          type: 'cobertura',
          file: '../karma-cobertura.xml'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: true
      },
      build: [
      ],
      bootstrap: [
      ],
      source: [
        'src/*.js'
      ],
      test: [
        'test/unit/**/*.js'
      ]
    },
    watch: {
      test: {
        files: [ '<%= jshint.test %>' ],
        tasks: [ 'test-unit' ]
      }
    }
  });

  // Test tasks.
  grunt.registerTask('test-unit', [ 'karma:test' ]);
  grunt.registerTask('coverage', [ 'karma:coverage' ]);

  // Default task.
  grunt.registerTask('default', [ 'test-unit', 'watch' ]);
};
