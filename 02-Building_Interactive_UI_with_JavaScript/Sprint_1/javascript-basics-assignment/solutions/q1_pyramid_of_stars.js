/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (row) => {
  let star = "";
  if (row < 0) {
    return " ";
  } else {
    for (let i = 1; i <= row; i += 1) {
      for (let k = 1; k <= row - i; k += 1) {
        star += " ";
      }
      for (let j = 1; j <= i; j += 1) {
        star += " *";
      }
      star += "  \n";
    }
    return star;
  }
};

console.log(buildPyramid(6));

module.exports = buildPyramid;
