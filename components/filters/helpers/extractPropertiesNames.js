export function extractPropertiesNames(arr, propertyName) {
  const uniqueValuesSet = new Set();

  if (!Array.isArray(arr)) {
    arr.forEach((obj) => {
      if (obj[propertyName]) {
        if (Array.isArray(obj[propertyName])) {
          obj[propertyName].forEach((value) => {
            uniqueValuesSet.add(value);
          });
        } else {
          uniqueValuesSet.add(obj[propertyName]);
        }
      }
    });
  } else {
      arr.forEach((item) => {
        item.collections.forEach((item) => {
          uniqueValuesSet.add(item.title);
        })
    })
  }

  return Array.from(uniqueValuesSet);
}
