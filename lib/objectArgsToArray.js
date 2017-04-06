"use strict";

exports.__esModule = true;

exports.default = function (objectArgs) {
  if (Array.isArray(objectArgs[0])) {
    return objectArgs[0];
  } else {
    return objectArgs;
  }
};