arr=[1,2,3,4];

arr.push(7);  // add ele to end of the array
console.log(arr);  

arr.pop();  //remove last ele from the array
console.log(arr);  

arr.unshift(0);    // adds ele to start
console.log(arr);  

arr.shift();  // removes element from start
console.log(arr);  

console.log(arr.length); 

console.log(arr.includes(2));  //check if 2 exists in arr

console.log(arr.indexOf(2)); // get index of a value

const nums = [10, 20, 30, 40];
console.log(nums);

console.log(nums.slice(1, 3));   // to get part of array 

nums.forEach(num => console.log(num)); // to loop through array

const double = nums.map(n => n * 2);  // used to transform array values
console.log(double);  

const filter = nums.filter(n => n > 20);  //used to get the particular elemets that meets the condition
console.log(filter);  

const a = [3, 1, 2];
a.sort();  
console.log(a);

a.reverse();  //used to reverse an array
console.log(a);  







