'use strict';

exports.__esModule = true;

var _actions = require('./actions');

var _messages = require('../messages');

exports.default = function (state, action) {

  switch (action.type) {
    case _actions.actionTypes.INIT:
      return action.describeMessage || (0, _messages.defaultDescribeTest)(action.testFn);
    default:
      return state;
  }
};