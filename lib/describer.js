'use strict';

exports.__esModule = true;
exports.executeDescribers = exports.assertionExecuter = exports.testExecuter = exports.buildDescriberDefinition = exports.describer = undefined;

var _lodash = require('lodash.filter');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isundefined');

var _lodash4 = _interopRequireDefault(_lodash3);

var _deepEqual = require('./deepEqual');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var describer = function describer(context, frameworkFunctions) {
  executeDescribers(buildDescriberDefinition(context, frameworkFunctions));
};

var executeDescribers = function executeDescribers(def) {
  var func = def.func,
      message = def.message,
      calls = def.calls,
      test = def.test;


  func(message, function () {
    if (test) {
      var testFn = test.testFn,
          inputParams = test.inputParams,
          expectedValue = test.expectedValue,
          assertFn = test.assertFn,
          beforeFns = test.beforeFns,
          afterFns = test.afterFns;


      executeFns(beforeFns);

      if (test.hasOwnProperty('expectedValue')) {
        testExecuter(testFn, inputParams, expectedValue);
      } else if (assertFn) {
        assertionExecuter(testFn, inputParams, assertFn);
      }

      executeFns(afterFns);
    } else {
      calls.forEach(function (call) {
        executeDescribers(call);
      });
    }
  });
};

var testExecuter = function testExecuter(testFn, inputParams, expectedValue) {
  var actualVal = testFn.apply(null, inputParams);
  (0, _deepEqual2.default)(actualVal, expectedValue);
};

var assertionExecuter = function assertionExecuter(testFn, inputParams, assertFn) {
  var actualVal = testFn.apply(null, inputParams);
  assertFn(actualVal);
};

var executeFns = function executeFns() {
  var fns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  fns.forEach(function (fn) {
    fn();
  });
};

var buildDescriberDefinition = function buildDescriberDefinition(context, frameworkFunctions) {
  var describeFn = frameworkFunctions.describeFn;
  var describeMessage = context.describeMessage;

  return {
    func: describeFn,
    message: describeMessage,
    calls: getCaseDescriberCalls(context, frameworkFunctions)
  };
};

var getCaseDescriberCalls = function getCaseDescriberCalls(context, frameworkFunctions) {
  var testFunction = context.testFunction,
      cases = context.cases,
      caseAssertions = context.caseAssertions,
      beforeFunctions = context.beforeFunctions,
      afterFunctions = context.afterFunctions;

  return cases.map(function (tCase, caseIndex) {
    var assertions = (0, _lodash2.default)(caseAssertions, ['caseIndex', caseIndex]);
    var beforeFns = (0, _lodash2.default)(beforeFunctions, ['caseIndex', caseIndex]).map(function (fnDef) {
      return fnDef.beforeFn;
    }) || [];
    var afterFns = (0, _lodash2.default)(afterFunctions, ['caseIndex', caseIndex]).map(function (fnDef) {
      return fnDef.afterFn;
    }) || [];
    return getCaseDescriberDef(tCase, frameworkFunctions, testFunction, assertions, beforeFns, afterFns);
  });
};

var getCaseDescriberDef = function getCaseDescriberDef(tCase, frameworkFunctions, testFn, assertions, beforeFns, afterFns) {
  var describeFn = frameworkFunctions.describeFn,
      itFn = frameworkFunctions.itFn;

  return {
    func: describeFn,
    message: tCase.describeMessage,
    calls: getCaseItCalls(tCase, itFn, testFn, assertions, beforeFns, afterFns)
  };
};

var getCaseItCalls = function getCaseItCalls(tCase, itFn, testFn, assertions, beforeFns, afterFns) {
  var shouldMessage = tCase.shouldMessage,
      inputParams = tCase.inputParams,
      expectedValue = tCase.expectedValue;

  var calls = [];
  if (!(0, _lodash4.default)(expectedValue)) {
    calls.push({
      func: itFn,
      message: shouldMessage,
      test: { testFn: testFn, inputParams: inputParams, expectedValue: expectedValue, beforeFns: beforeFns, afterFns: afterFns }
    });
  }
  if (assertions) {
    assertions.forEach(function (assertion) {
      var assertFn = assertion.assertFn;

      calls.push({
        func: itFn,
        message: assertion.shouldMessage,
        test: { testFn: testFn, inputParams: inputParams, assertFn: assertFn, beforeFns: beforeFns, afterFns: afterFns }
      });
    });
  }
  return calls;
};

exports.default = describer;
exports.describer = describer;
exports.buildDescriberDefinition = buildDescriberDefinition;
exports.testExecuter = testExecuter;
exports.assertionExecuter = assertionExecuter;
exports.executeDescribers = executeDescribers;