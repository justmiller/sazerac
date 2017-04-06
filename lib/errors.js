'use strict';

exports.__esModule = true;
exports.TestCaseError = exports.expectedFunction = undefined;

var _objectToMessageString = require('./objectToMessageString');

var _objectToMessageString2 = _interopRequireDefault(_objectToMessageString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseMessage = function baseMessage(fnName) {
  return 'call to `' + fnName + '()` failed. ';
};

var expectedFunction = exports.expectedFunction = function expectedFunction(fnName, fnArg) {
  return baseMessage(fnName) + 'expected ' + (0, _objectToMessageString2.default)(fnArg) + ' to be a function';
};

var TestCaseError = exports.TestCaseError = function TestCaseError(expected, actual) {
  var actualStr = (0, _objectToMessageString2.default)(actual);
  var expectedStr = (0, _objectToMessageString2.default)(expected);
  var msg = 'Test case failed: expected ' + expectedStr + ' to equal ' + actualStr;
  return new Error(msg);
};

exports.default = { expectedFunction: expectedFunction, TestCaseError: TestCaseError };