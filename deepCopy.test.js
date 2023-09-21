import { deepCopy } from './deepCopy.js';

describe('deep copy', () => {
  test('deep copy한 객체의 값은 original과 copy가 같다.', () => {
    const original = {
      a: [4, 5, 6, {g: 7}],
      b: new Date(),
      c: /hello/g
    }

    const copy = deepCopy(original);

    expect(original).toEqual(copy)
    expect(original).not.toBe(copy)
  }),

  test('deep copy한 객체의 참조값은 original과 copy가 다르다.', () => {
    const original = {
      a: [4, 5, 6, {g: 7}],
      b: new Date(),
      c: /hello/g
    }

    const copy = deepCopy(original);

    expect(original).not.toBe(copy)
  })
})
