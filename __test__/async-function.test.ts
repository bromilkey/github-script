/* eslint-disable @typescript-eslint/no-explicit-any */

import {callAsyncFunction} from '../src/async-function'

describe('callAsyncFunction', () => {
  test('calls the function with its arguments', async () => {
    const result = await callAsyncFunction({foo: 'bar'} as any, 'return foo')
    expect(result).toEqual('bar')
  })

  test('throws on ReferenceError', async () => {
    expect.assertions(1)

ddddddddddddddddddddddddddddddddddddddd