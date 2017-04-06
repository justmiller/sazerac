"use strict";

exports.__esModule = true;
var lastCaseIndex = function lastCaseIndex(ctx) {
  if (ctx && ctx.cases && ctx.cases.length > 0) {
    return ctx.cases.length - 1;
  }
};

exports.lastCaseIndex = lastCaseIndex;
exports.default = lastCaseIndex;