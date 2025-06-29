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

const nums = [1, 2, 3, 4];
console.log(nums);

console.log(nums.slice(1, 3));   // to get part of array 

nums.forEach(num => console.log(num)); // to loop through array on each element

console.log("To print square usng forEach")
nums.forEach((num)=>{
    console.log(num*num);
})

const a = [3, 1, 2];
a.sort();  
console.log(a);

a.reverse();  //used to reverse an array
console.log(a);  

console.log("map");
const sq=nums.map((el)=>{
   return el*el;
})
console.log(sq);

console.log("Filter");
const filter = nums.filter(n => n > 2);  //used to get the particular elemets that meets the condition
console.log(filter);  

//every method--> gives true if all the elements satisfy the conditions in the array else returns false
const numbers=[10,13,14,16];
const evry=numbers.every((el)=>{
    return el%2==0;
})
console.log(evry);

//some method-->it is like logical or; returns true if functions is true for some elements else false
const some=numbers.some((el)=>{
    return el%2==0;
})
console.log(some);

//reduce method-->reduces the array to a single value
//reduce(accumulator,element)
const cart=[{
    name:'Watch',
    price:500
},{
    name:'Mobile',
    price:7000
},{
    name:'Laptop',
    price:40000
}]
const totalPrice=cart.reduce((res,value)=> res+value.price,0);
console.log(totalPrice);



