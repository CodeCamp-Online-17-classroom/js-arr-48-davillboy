// write code here
const nums = [-3, 2, 11, -7, 4, 6];

function multiplyArray(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

const result = multiplyArray(nums);
console.log(result); 
