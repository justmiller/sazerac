'use strict';

exports.__esModule = true;

var _actions = require('./actions');

exports.default = function (state, action) {

  switch (action.type) {
    case _actions.actionTypes.INIT:
      return action.testFn;
    default:
      return state;
  }
};