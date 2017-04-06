'use strict';

exports.__esModule = true;

var _cases = require('./cases');

var _cases2 = _interopRequireDefault(_cases);

var _caseAssertions = require('./caseAssertions');

var _caseAssertions2 = _interopRequireDefault(_caseAssertions);

var _describeMessage = require('./describeMessage');

var _describeMessage2 = _interopRequireDefault(_describeMessage);

var _testFunction = require('./testFunction');

var _testFunction2 = _interopRequireDefault(_testFunction);

var _setupAndTeardown = require('./setupAndTeardown');

var _setupAndTeardown2 = _interopRequireDefault(_setupAndTeardown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  return {
    testFunction: (0, _testFunction2.default)(state.testFunction, action),
    cases: (0, _cases2.default)(state.cases, action),
    caseAssertions: (0, _caseAssertions2.default)(state.caseAssertions, action),
    beforeFunctions: (0, _setupAndTeardown2.default)(state.beforeFunctions, _setupAndTeardown.setupAndTeardownTypes.BEFORE, action),
    afterFunctions: (0, _setupAndTeardown2.default)(state.afterFunctions, _setupAndTeardown.setupAndTeardownTypes.AFTER, action),
    describeMessage: (0, _describeMessage2.default)(state.describeMessage, action)
  };
};