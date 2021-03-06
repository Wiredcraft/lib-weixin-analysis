DEBUG = DEBUG=lorem,lorem:*
BIN = ./node_modules/.bin
TESTS = test/*.test.js
MOCHA_OPTS = -b --timeout 10000 --reporter spec

lint:
	@echo "Linting..."
	@$(BIN)/eslint .
lint-fix:
	@echo "Linting with fix flag..."
	@$(BIN)/eslint --fix .
test: lint
	@echo "Testing..."
	@NODE_ENV=test $(DEBUG) $(BIN)/_mocha $(MOCHA_OPTS) $(TESTS)
test-cov: lint
	@echo "Testing..."
	@NODE_ENV=test $(DEBUG) $(BIN)/istanbul cover $(BIN)/_mocha -- $(MOCHA_OPTS) $(TESTS)
test-coveralls: test-cov
	@cat ./coverage/lcov.info | $(BIN)/coveralls --verbose
.PHONY: lint lint-fix test test-cov test-coveralls
