import { deepCopy } from './deepCopy.js';

describe('deep copy', () => {
  test('heeji', () => {
    const original = {
      a: 1,
      b: 2
    }

    const copy = deepCopy(original);

    expect(original).toEqual(copy)
    expect(original).not.toBe(copy)
  })
})
