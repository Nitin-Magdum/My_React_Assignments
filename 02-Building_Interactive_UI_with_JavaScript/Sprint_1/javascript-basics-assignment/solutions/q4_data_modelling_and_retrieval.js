// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast

const fruitArray = [
  { name: "Lychee", color: "red", price: 50 },
  { name: "Grapes", color: "green", price: 70 },
  { name: "Orange", color: "orange", price: 120 },
  { name: "Apple", color: "red", price: 400 },
];
const convertToobj = (fruit, key) =>
  fruit.reduce((obj, item) => {
    obj[item[key]] = item;
    return obj;
  }, {});
const fruitobj = convertToobj(fruitArray, "name");
console.log(fruitobj);
