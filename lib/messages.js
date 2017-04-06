'use strict';

exports.__esModule = true;
exports.defaultShouldMessage = exports.defaultDescribeCase = exports.defaultDescribeTest = undefined;

var _lodash = require('lodash.isfunction');

var _lodash2 = _interopRequireDefault(_lodash);

var _objectToMessageString = require('./objectToMessageString');

var _objectToMessageString2 = _interopRequireDefault(_objectToMessageString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultDescribeTest = function defaultDescribeTest(fn) {
  if ((0, _lodash2.default)(fn)) {
    if (fn.name) {
      return fn.name + '()';
    } else {
      return '[anonymous function]';
    }
  }
};

var defaultDescribeCase = function defaultDescribeCase() {
  var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (args.length > 0) {
    var formattedArgs = args.map(function (arg) {
      return (0, _objectToMessageString2.default)(arg);
    });
    return 'when given ' + formattedArgs.join(' and ');
  } else {
    return 'when called';
  }
};

var defaultShouldMessage = function defaultShouldMessage(expectedValue) {
  return 'should return ' + (0, _objectToMessageString2.default)(expectedValue);
};

exports.default = { defaultDescribeTest: defaultDescribeTest, defaultDescribeCase: defaultDescribeCase, defaultShouldMessage: defaultShouldMessage };
exports.defaultDescribeTest = defaultDescribeTest;
exports.defaultDescribeCase = defaultDescribeCase;
exports.defaultShouldMessage = defaultShouldMessage;