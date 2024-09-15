const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
};

// Example usage:
const originalObj = { a: 1, b: { c: 2, d: [3, 4] } };
const clonedObj = deepClone(originalObj);
console.log(clonedObj);

// new comment added
