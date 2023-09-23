function isObject(value) {
  return typeof value === "object";
}

export function deepCopy(value) {
  if (value === null || !isObject(value)) {
    return value;
  }

  const constructorOfValue = value.constructor.name;

  let copied = constructorOfValue === "Array" ? [] : {};

  switch (constructorOfValue) {
    case "Array": {
      value.forEach((v, i) => {
        copied[i] = deepCopy(v);
      });
      break;
    }

    case "Date": {
      copied = new Date(value.getTime());
      break;
    }

    case "RegExp": {
      copied = new RegExp(value.source, value.flags);
      break;
    }

    case "Map": {
      copied = new Map();
      for (let [key, value] of value) {
        copied.set(deepCopy(key), deepCopy(value));
      }
      break;
    }

    case "Set": {
      copied = new Set();
      for (let value of value) {
        copied.add(deepCopy(value));
      }
      break;
    }

    default: {
      for (let v in value) {
        if (value.hasOwnProperty(v)) {
          copied[v] = deepCopy(value[v]);
        }
      }
    }
  }

  return copied;
}
