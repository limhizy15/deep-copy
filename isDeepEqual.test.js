import { expect, describe, it } from '@jest/globals';
import { isDeepEqual } from './isDeepEqual';

describe('isDeepEqual', () => {
  it('두 객체를 비교했을 때 같다.', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, c: 3 };
    expect(isDeepEqual(obj1, obj2)).toBe(true);
  });

  it('두 객체를 비교했을 때 다르다.', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { a: 1, b: 2, c: 4 };
    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  it('두 중첩 객체를 비교했을 때 같다.', () => {
    const obj1 = { a: { x: 1, y: 2 }, b: 2 };
    const obj2 = { a: { x: 1, y: 2 }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(true);
  });

  it('두 중첩 객체를 비교했을 때 다르다.', () => {
    const obj1 = { a: { x: 1, y: 2 }, b: 2 };
    const obj2 = { a: { x: 1, y: 3 }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  it('Date가 있는 두 객체를 비교했을 때 같다.', () => {
    const obj1 = { a: { x: 1, date: new Date(2020, 1, 1) }, b: 2 };
    const obj2 = { a: { x: 1, date: new Date(2020, 1, 1) }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(true);
  });

  it('Date가 있는 두 객체를 비교했을 때 다르다.', () => {
    const obj1 = { a: { x: 1, date: new Date(2020, 1, 1) }, b: 2 };
    const obj2 = { a: { x: 1, date: new Date(2021, 1, 1) }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  it('Regex가 있는 두 객체를 비교했을 때 같다.', () => {
    const obj1 = { a: { x: 1, regex: /test/g }, b: 2 };
    const obj2 = { a: { x: 1, regex: /test/g }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(true);
  });

  it('Regex가 있는 두 객체를 비교했을 때 다르다.', () => {
    const obj1 = { a: { x: 1, regex: /test/g }, b: 2 };
    const obj2 = { a: { x: 1, regex: /test2/g }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  it('Map이 있는 두 객체를 비교했을 때 같다.', () => {
    const obj1 = { a: { x: 1, map: new Map().set('key', 'value') }, b: 2 };
    const obj2 = { a: { x: 1, map: new Map().set('key', 'value') }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(true);
  });

  it('Map이 있는 두 객체를 비교했을 때 다르다.', () => {
    const obj1 = { a: { x: 1, map: new Map().set('key', 'value') }, b: 2 };
    const obj2 = { a: { x: 1, map: new Map().set('key', 'value2') }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  it('Set이 있는 두 객체를 비교했을 때 같다.', () => {
    const obj1 = { a: { x: 1, set: new Set([1, 2, 3]) }, b: 2 };
    const obj2 = { a: { x: 1, set: new Set([1, 2, 3]) }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(true);
  });

  it('Set이 있는 두 객체를 비교했을 때 다르다.', () => {
    const obj1 = { a: { x: 1, set: new Set([1, 2, 3]) }, b: 2 };
    const obj2 = { a: { x: 1, set: new Set([1, 2, 4]) }, b: 2 };
    expect(isDeepEqual(obj1, obj2)).toBe(false);
  });

  it('복잡한 중첩된 두 객체를 비교했을 때 같다.', () => {
    const obj1 = {
      a: [4, 5, 6, {g: 7}],
      b: new Date(0),
      c: /hello/g
    }
  
    const obj2 = {
      a: [4, 5, 6, {g: 7}],
      b: new Date(0),
      c: /hello/g
    }
  
    expect(isDeepEqual(obj1, obj2)).toBe(true)
  })
});
