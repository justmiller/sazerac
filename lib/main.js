'use strict';

exports.__esModule = true;
exports.forCases = exports.given = exports.test = undefined;

var _lodash = require('lodash.isfunction');

var _lodash2 = _interopRequireDefault(_lodash);

var _errors = require('./errors');

var _errors2 = _interopRequireDefault(_errors);

var _lastCaseIndex = require('./lastCaseIndex');

var _lastCaseIndex2 = _interopRequireDefault(_lastCaseIndex);

var _actions = require('./reducers/actions');

var _describer = require('./describer');

var _describer2 = _interopRequireDefault(_describer);

var _testCase = require('./testCase');

var _testCaseCollection = require('./testCaseCollection');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _state = void 0;

(0, _actions.listener)(function (state) {
  _state = state;
});

/**
 * Defines test cases for a function
 *
 * @param {function} testFn - The function to test
 * @param {function} definerFn - The function that defines test cases for `testFn`
 */
var test = function test(testFn, definerFn) {
  var frameworkFns = {
    describeFn: describe,
    itFn: it
  };
  if (!(0, _lodash2.default)(testFn)) throw new Error(_errors2.default.expectedFunction('test', testFn));
  if (!(0, _lodash2.default)(definerFn)) throw new Error(_errors2.default.expectedFunction('test', definerFn));
  _actions.actions.init({ testFn: testFn });
  definerFn();
  (0, _describer2.default)(_state, frameworkFns);
};

/**
 * Defines the functional arguments for a test case
 *
 * @param {...object} args - The arguments that will be passed to the function being
 *                           tested
 *
 * @returns {object} A test case object
 */
var given = function given() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var state = _actions.actions.addCase({ args: args });
  var caseIndex = (0, _lastCaseIndex2.default)(state);
  return (0, _testCase.newTestCase)(caseIndex);
};

/**
 * Groups multiple test case objects into a collection
 *
 * @param {...object} testCases - The test case objects to group. Accepts an array or 
 *                                a series of arguments
 *
 * @returns {object} A test case collection object
 */
var forCases = function forCases() {
  for (var _len2 = arguments.length, testCases = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    testCases[_key2] = arguments[_key2];
  }

  return (0, _testCaseCollection.newTestCaseCollection)(testCases);
};

exports.test = test;
exports.given = given;
exports.forCases = forCases;
exports.default = { test: test, given: given, forCases: forCases };