REPORTER = list

test:
	clear
	echo Starting test *******************************
	./node_modules/mocha/bin/mocha \
	--recursive --timeout 30000 \
	--reporter $(REPORTER) \
	test \
	$(MOCHA_OPTS)
	echo Ending test *******************************

test_multiple_folders:
	clear
	echo Starting test *******************************
	./node_modules/mocha/bin/mocha \
	--recursive --timeout 30000 \
	--reporter $(REPORTER) \
	test/unit test/integration/smoke \
	$(MOCHA_OPTS)
	echo Ending test *******************************

.PHONY: test
