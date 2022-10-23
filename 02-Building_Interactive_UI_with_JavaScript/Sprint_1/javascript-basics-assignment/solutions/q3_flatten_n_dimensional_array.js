const flatten = (arr) => {
  let number = Infinity;
  return Array.isArray(arr)
    ? number > 0
      ? arr.reduce(
          (actual, value) =>
            actual.concat(
              Array.isArray(value) ? flatten(value, number - 1) : value
            ),
          []
        )
      : arr.slice()
    : null;
};
console.log(flatten([1, [2, 3], [[4], [5]]]));
module.exports = flatten;
