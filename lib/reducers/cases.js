'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash.concat');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.toarray');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.at');

var _lodash6 = _interopRequireDefault(_lodash5);

var _lodash7 = require('lodash.isundefined');

var _lodash8 = _interopRequireDefault(_lodash7);

var _sprintfJs = require('sprintf-js');

var _actions = require('./actions');

var _messages = require('../messages');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateCase = function updateCase(cases, caseIndex, fn) {
  return cases.map(function (tCase, i) {
    if (caseIndex === i) {
      return fn(tCase);
    }
    return tCase;
  });
};

var setCaseProps = function setCaseProps(state, caseIndex, props) {
  return updateCase(state, caseIndex, function (tCase) {
    return _extends({}, tCase, props);
  });
};

var getCaseProp = function getCaseProp(state, caseIndex, prop) {
  return (0, _lodash6.default)(state, '[' + caseIndex + '].' + prop)[0];
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];
  var caseIndex = action.caseIndex;

  var inputParams = void 0,
      args = void 0,
      expectedVal = void 0,
      msg = void 0;

  switch (action.type) {

    case _actions.actionTypes.ADD_CASE:
      inputParams = (0, _lodash4.default)(action.args);
      return (0, _lodash2.default)(state, {
        inputParams: inputParams,
        describeMessage: (0, _messages.defaultDescribeCase)(inputParams)
      });

    case _actions.actionTypes.SET_CASE_EXPECTED_VALUE:
      msg = action.message || getCaseProp(state, caseIndex, 'shouldMessage');
      return setCaseProps(state, caseIndex, {
        expectedValue: action.expectedValue,
        shouldMessage: msg ? (0, _sprintfJs.vsprintf)(msg, [action.expectedValue]) : (0, _messages.defaultShouldMessage)(action.expectedValue)
      });

    case _actions.actionTypes.SET_CASE_DESCRIBE_MESSAGE:
      args = getCaseProp(state, caseIndex, 'inputParams');
      msg = args && args.length > 0 ? (0, _sprintfJs.vsprintf)(action.message, args) : action.message;
      return setCaseProps(state, caseIndex, { describeMessage: msg });

    case _actions.actionTypes.SET_CASE_SHOULD_MESSAGE:
      expectedVal = getCaseProp(state, caseIndex, 'expectedValue');
      msg = !(0, _lodash8.default)(expectedVal) ? (0, _sprintfJs.vsprintf)(action.message, [expectedVal]) : action.message;
      return setCaseProps(state, caseIndex, { shouldMessage: msg });

    case _actions.actionTypes.INIT:
      return [];

    default:
      return state;

  }
};