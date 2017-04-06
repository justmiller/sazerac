'use strict';

exports.__esModule = true;

var _lodash = require('lodash.concat');

var _lodash2 = _interopRequireDefault(_lodash);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];


  switch (action.type) {

    case _actions.actionTypes.ADD_CASE_ASSERTION:
      return (0, _lodash2.default)(state, {
        caseIndex: action.caseIndex,
        shouldMessage: action.message,
        assertFn: action.assertFn
      });

    case _actions.actionTypes.INIT:
      return [];

    default:
      return state;

  }
};