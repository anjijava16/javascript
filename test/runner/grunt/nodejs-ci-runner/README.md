nodejs-ci-runner
================

It shows how to enable CI in nodejs project.

Enable CI steps:

1, add mocha.ci task to gruntfile and register the ci task

    mocha: {
      ...
      ci: {
        options: {
          reporter: 'xunit',
          captureFile: 'results/unit/server-tests.xml'
        },
        src: [ '<%= jshint.test %>' ]
      }
    }

>  // Continuous Integration

>  grunt.registerTask('ci', [ 'ci-server' ]);

>  grunt.registerTask('ci-server', [ 'mocha:ci', 'coverage-server' ]);


2, create following file in scripts folder
bootstrap
build
ci_build
lint
test

3, gain execute permissions to scipt files 
$ chmod +x scripts/*

4, submit the changes github with execute permissions for the scripts

>	$ ls -l scripts/

>	total 24

>	-rwxr-xr-x  1 emailAlias  ***\Domain Users  564 Jul 17 17:57 bootstrap

>	-rwxr-xr-x  1 emailAlias  ***\\Domain Users    0 Jul 17 17:57 build

>	-rwxr-xr-x  1 emailAlias  ***\\Domain Users  330 Jul 17 17:57 ci_build

>	-rwxr-xr-x  1 emailAlias  ***\\Domain Users    0 Jul 17 17:57 lint

>	-rwxr-xr-x  1 emailAlias  ***\\Domain Users  639 Jul 17 17:57 test

5, Test Run
run $ ./scripts/test
make sure there are .xml files in `results/unit` and `results/coverage`

6, Create a new job in jenkin ci server

7, Add a custom tab named jenkin that points at the jenkins ci build link

