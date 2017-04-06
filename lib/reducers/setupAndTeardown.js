'use strict';

exports.__esModule = true;
exports.setupAndTeardownTypes = undefined;

var _lodash = require('lodash.concat');

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setupAndTeardownTypes = exports.setupAndTeardownTypes = {
  BEFORE: 'before',
  AFTER: 'after'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var type = arguments[1];
  var action = arguments[2];


  switch (action.type) {

    case _actions.actionTypes.ADD_CASE_BEFORE_FN:
      switch (type) {
        case setupAndTeardownTypes.BEFORE:
          return (0, _lodash2.default)(state, {
            caseIndex: action.caseIndex,
            beforeFn: action.beforeFn
          });
        default:
          return state;
      }

    case _actions.actionTypes.ADD_CASE_AFTER_FN:
      switch (type) {
        case setupAndTeardownTypes.AFTER:
          return (0, _lodash2.default)(state, {
            caseIndex: action.caseIndex,
            afterFn: action.afterFn
          });
        default:
          return state;
      }

    case _actions.actionTypes.INIT:
      return [];

    default:
      return state;

  }
};