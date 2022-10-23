/* Write a Program to convert an array of objects to an object
	based on a given key */

const convert = (arr, key) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const res = (arr, key) =>
    arr.reduce((obj, item) => {
      obj[item[key]] = item;
      return obj;
    }, {});
  return res(arr, key);
};

console.log(
  convert(
    [
      { id: 1, value: "abc" },
      { id: 2, value: "xyz" },
    ],
    "id"
  )
);

module.exports = convert;
