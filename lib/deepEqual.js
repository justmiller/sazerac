'use strict';

exports.__esModule = true;
exports.deepEqual = undefined;

var _deepEql = require('deep-eql');

var _deepEql2 = _interopRequireDefault(_deepEql);

var _errors = require('./errors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deepEqual = exports.deepEqual = function deepEqual(actualValue, expectedValue) {
  if (!(0, _deepEql2.default)(actualValue, expectedValue)) {
    throw (0, _errors.TestCaseError)(expectedValue, actualValue);
  }
};

exports.default = deepEqual;