'use strict';

exports.__esModule = true;
exports.newTestCaseCollection = undefined;

var _objectArgsToArray = require('./objectArgsToArray');

var _objectArgsToArray2 = _interopRequireDefault(_objectArgsToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newTestCaseCollection = function newTestCaseCollection(testCases) {

  testCases = (0, _objectArgsToArray2.default)(testCases);

  return {

    /**
     * Defines the expected return value for all test cases in
     * the collection. Calls expect() on each test case.
     * 
     * @param {object} expectedValue - The expected return value
     *
     * @returns {object} A test case collection object
     */
    expect: collectionFn(testCases, 'expect'),

    /**
     * Defines the "describe" message for all test cases in the
     * collection. Calls describe() on each test case.
     * 
     * @param {string} message
     *
     * @returns {object} A test case collection object
     */
    describe: collectionFn(testCases, 'describe'),

    /**
     * Defines the "should" message for all test cases in the
     * collection. Calls should() on each test case.
     * 
     * @param {string} message
     *
     * @returns {object} A test case collection object
     */
    should: collectionFn(testCases, 'should'),

    /**
     * Defines a custom assertion function for all test cases in
     * the collection. Calls assert() on each test case.
     * 
     * @param {string} message - A message describing the assertion
     * @param {function} assertFn - The custom assert function
     *
     * @returns {object} A test case collection object
     */
    assert: collectionFn(testCases, 'assert'),

    /**
     * Adds a function to run before each test case in the collection.
     * Calls before() on each test case
     * 
     * @param {function} beforeFn
     *
     * @returns {object} A test case collection object
     */
    before: collectionFn(testCases, 'before'),

    /**
     * Adds a function to run after each test case in the collection.
     * Calls after() on each test case
     * 
     * @param {function} afterFn
     *
     * @returns {object} A test case collection object
     */
    after: collectionFn(testCases, 'after')
  };
};

var collectionFn = function collectionFn(testCases, fnName) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    testCases.forEach(function (testCase) {
      testCase[fnName].apply(null, args);
    });
    return newTestCaseCollection(testCases);
  };
};

exports.newTestCaseCollection = newTestCaseCollection;
exports.default = newTestCaseCollection;