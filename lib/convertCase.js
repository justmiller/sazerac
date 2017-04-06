"use strict";

exports.__esModule = true;
var convertCase = function convertCase(str) {
  return str.toLowerCase().replace(/_([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};

exports.default = convertCase;
exports.convertCase = convertCase;