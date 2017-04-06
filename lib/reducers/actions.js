'use strict';

exports.__esModule = true;
exports.listener = exports.actionTypes = exports.actions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash.isfunction');

var _lodash2 = _interopRequireDefault(_lodash);

var _convertCase = require('../convertCase');

var _convertCase2 = _interopRequireDefault(_convertCase);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = {};
var actionTypes = {};
var state = {};
var listenerFns = [];

var actionsArray = ['INIT', 'ADD_CASE', 'SET_CASE_EXPECTED_VALUE', 'SET_CASE_DESCRIBE_MESSAGE', 'SET_CASE_SHOULD_MESSAGE', 'ADD_CASE_ASSERTION', 'ADD_CASE_BEFORE_FN', 'ADD_CASE_AFTER_FN'];

actionsArray.forEach(function (action) {
  actions[(0, _convertCase2.default)(action)] = function (params) {
    return doAction(action, params);
  };
  actionTypes[action] = action;
});

var doAction = function doAction(type, params) {
  state = (0, _store2.default)(state, _extends({ type: type }, params));
  listenerFns.forEach(function (fn) {
    fn(state);
  });
  return state;
};

var listener = function listener(fn) {
  if ((0, _lodash2.default)(fn)) {
    listenerFns.push(fn);
  } else {
    throw new Error('invalid listener. ' + fn + ' is not a function');
  }
};

exports.actions = actions;
exports.actionTypes = actionTypes;
exports.listener = listener;
exports.default = actions;