function isObject(value) {
  return typeof value === 'object'
}

export function deepCopy(value) {
  if (value === null) return null;
  if (!isObject(value)) return value;

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }

  if (value instanceof Map) {
    const clonedMap = new Map();
    for (let [key, value] of value) {
      clonedMap.set(deepClone(key), deepClone(value));
    }
    return clonedMap;
  }

  if (value instanceof Set) {
    const clonedSet = new Set();
    for (let value of value) {
      clonedSet.add(deepClone(value));
    }
    return clonedSet;
  }

  if (value instanceof Array) {
    const copy = [];

    value.forEach((v, i) => {
      copy[i] = deepCopy(v)
    })

    return copy;
  }

  if (value instanceof Object) {
    const copy = {};
    for (let v in value) {
      if (value.hasOwnProperty(v)) {
        copy[v] = deepCopy(value[v]);
      }
    }
    return copy;
  }
}
