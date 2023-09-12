import { expect, describe, it } from '@jest/globals';
import { isDeepEqual } from './isDeepEqual';

describe('isDeepEqual', () => {
  it('should compare primitives', () => {
    const pairs = [
      [1, 1, true],
      [1, Object(1), true],
      [1, '1', false],
      [1, 2, false],
      [-0, -0, true],
      [0, 0, true], 
      [0, Object(0), true], 
      [Object(0), Object(0), true], 
      [-0, 0, true], 
      [0, '0', false], 
      [0, null, false],
      ['a', 'a', true], 
      ['a', Object('a'), true], 
      [Object('a'), Object('a'), true], 
      ['a', 'b', false], 
      ['a', ['a'], false],
      [true, true, true], 
      [true, Object(true), true], 
      [Object(true), Object(true), true], 
      [true, 1, false], 
      [true, 'a', false],
      [false, false, true], 
      [false, Object(false), true], 
      [Object(false), Object(false), true], 
      [false, 0, false], 
      [false, '', false],
      [null, null, true], 
      [null, undefined, false], 
      [null, {}, false], 
      [null, '', false],
      [undefined, undefined, true], 
      [undefined, null, false], 
      [undefined, '', false]
    ]

    const expected = pairs.map(pair => pair[2])
    const actual = pairs.map(pair => isDeepEqual(pair[0], pair[1]))

    expect(expected).toEqual(actual)
  })

  it('should compare arrays', () => {
    const arr1 = [true, null, 1, 'a', undefined];
    const arr2 = [true, null, 1, 'a', undefined];

    expect(isDeepEqual(arr1, arr2)).toBe(true)
  })

  it('should compare plain objects', () => {
    let obj1 = { a: 1, b: 2, c: 3 };
    let obj2 = { a: 1, b: 2, c: 3 };
    expect(isDeepEqual(obj1, obj2)).toBe(true);

    obj1 = { a: 1, b: 2, c: 3 };
    obj2 = { a: 1, b: 2, c: 4 };
    expect(isDeepEqual(obj1, obj2)).toBe(false);

    obj1 = { a: { x: 1, y: 2 }, b: 2 };
    obj2 = { a: { x: 1, y: 2 }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(true);

    obj1 = { a: { x: 1, y: 2 }, b: 2 };
    obj2 = { a: { x: 1, y: 3 }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(false);

    obj1 = { a: { x: 1, date: new Date(2020, 1, 1) }, b: 2 };
    obj2 = { a: { x: 1, date: new Date(2020, 1, 1) }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(true);

    obj1 = { a: { x: 1, date: new Date(2020, 1, 1) }, b: 2 };
    obj2 = { a: { x: 1, date: new Date(2021, 1, 1) }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(false);

    obj1 = { a: { x: 1, regex: /test/g }, b: 2 };
    obj2 = { a: { x: 1, regex: /test/g }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(true);

    obj1 = { a: { x: 1, map: new Map().set('key', 'value') }, b: 2 };
    obj2 = { a: { x: 1, map: new Map().set('key', 'value') }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(true);

    obj1 = { a: { x: 1, set: new Set([1, 2, 3]) }, b: 2 };
    obj2 = { a: { x: 1, set: new Set([1, 2, 3]) }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(true);

    obj1 = { a: { x: 1, set: new Set([1, 2, 3]) }, b: 2 };
    obj2 = { a: { x: 1, set: new Set([1, 2, 4]) }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  it('should compare nested objects', () => {
    let obj1 = {
      a: [4, 5, 6, {g: 7}],
      b: new Date(0),
      c: /hello/g
    }
  
    let obj2 = {
      a: [4, 5, 6, {g: 7}],
      b: new Date(0),
      c: /hello/g
    }
  
    expect(isDeepEqual(obj1, obj2)).toBe(true)
  })
});
