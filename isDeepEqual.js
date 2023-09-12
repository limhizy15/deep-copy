function isObject(value) {
  return value !== null && typeof value === 'object'
}

function isDate(value) {
  return value instanceof Date;
}

function isRegExp(value) {
  return value instanceof RegExp;
}

function isMap(value) {
  return value instanceof Map;
}

function isSet(value) {
  return value instanceof Set;
}

function isDeepEqual(value, other) {
  if (value === other) return true

  if ((!isObject(value) && !isObject(other)) || value == null || other == null) {
    return value === other
  }

  if (value.constructor !== other.constructor) return false

  const objKeys1 = Object.keys(value);
  const objKeys2 = Object.keys(other);

  if (objKeys1.length !== objKeys2.length) return false;

  for (const key of objKeys1) {
    const value1 = value[key];
    const value2 = other[key];

    if (isDate(value1) && isDate(value2)) {
      if (value1.getTime() !== value2.getTime()) return false;
    } else if (isRegExp(value1) && isRegExp(value2)) {
      if (value1.toString() !== value2.toString()) return false;
    } else if (isMap(value1) && isMap(value2)) {
      if (!isDeepEqual(Array.from(value1), Array.from(value2))) return false;
    } else if (isSet(value1) && isSet(value2)) {
      if (!isDeepEqual([...value1], [...value2])) return false;
    } else if (
      (isObject(value1) && isObject(value2) && !isDeepEqual(value1, value2)) ||
      (!isObject(value1) && value1 !== value2)
    ) {
      return false;
    }
  }

  return true;
}

export { isDeepEqual }
