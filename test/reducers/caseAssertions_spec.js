import { assert } from 'chai'
import { runTests } from '../helpers'
import caseAssertions from '../../src/reducers/caseAssertions'

runTests([

  [caseAssertions, 'caseAssertions() ADD_CASE_ASSERTION', [

    [
      'when given an array with no existing assertions',
      [
        [],
        { type: 'ADD_CASE_ASSERTION', caseIndex: 0, message: 'mock_message', assertFn: 'mock_assert_fn' }
      ],
      [
        [
          'should return an array with one assertion added',
          (ret) => { assert.propertyVal(ret, 'length', 1) }
        ],
        [
          'should return an array with an assertion added with assertFn set',
          (ret) => { assert.deepPropertyVal(ret, '[0].assertFn', 'mock_assert_fn') }
        ],
        [
          'should return an array with an assertion added with shouldMessage set',
          (ret) => { assert.deepPropertyVal(ret, '[0].shouldMessage', 'mock_message') }
        ]
      ]
    ],

    [
      'when given a case with existing assertions',
      [
        [{}, {}],
        { type: 'ADD_CASE_ASSERTION', caseIndex: 0, message: 'mock_message', assertFn: 'mock_assert_fn' }
      ],
      [
        [
          'should return an array with the new assertion added',
          (ret) => { assert.propertyVal(ret, 'length', 3) }
        ],
        [
          'should return an array with an assertion added with assertFn set',
          (ret) => { assert.deepPropertyVal(ret, '[2].assertFn', 'mock_assert_fn') }
        ],
        [
          'should return an array with an assertion added with shouldMessage set',
          (ret) => { assert.deepPropertyVal(ret, '[2].shouldMessage', 'mock_message') }
        ]
      ]
    ]

  ]]

])