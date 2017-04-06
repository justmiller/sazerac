'use strict';

exports.__esModule = true;

var _lodash = require('lodash.isstring');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isobject');

var _lodash4 = _interopRequireDefault(_lodash3);

var _lodash5 = require('lodash.isundefined');

var _lodash6 = _interopRequireDefault(_lodash5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (o) {
  if ((0, _lodash6.default)(o)) return 'undefined';
  if ((0, _lodash2.default)(o)) return '\'' + o + '\'';else if (_lodash4.default) return JSON.stringify(o);
  return o;
};