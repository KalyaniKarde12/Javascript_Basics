// 'this' in js---> this keyword is used to refer objects that are executing the current piece of the code
const obj={
    name:'Kalyani',
    eng:70,
    maths:80,
    sci:90,
    getAvg(){
        const avg=(this.eng+this.maths+this.sci);
        console.log(avg);
    }
}
obj.getAvg();

//try and catch statements---try: allows us to write a code where there are chnaces of error and it the code eeds to tested, catch: executes the code if the error occurs in the try block
try {
    let result = x + 10;  
    console.log(result);
} catch (error) {
    console.log("An error occurred:", error.message);
}


//Arrow functions-->shorthand for defining js functions
const sum=(a,b)=>{
    console.log(a+b);
}
sum(2,3);

//this with arrow functions
const user={
    name:'Kalyani',
    getName:function(){
        console.log(this.name);
    },
    getNameArr:()=>{
        console.log(this.name)
    }
}
user.getName(); //will print Kalyani
user.getNameArr(); // undefined

//spread in js--> used to expand elements from the iterable like string,array,objects--takes all the elements from the array and stores them individually
const original = [1, 2, 3];
const copy = [...original];
console.log(copy);       

const user1 = {
  name: 'Kalyani',
  course: 'Comp'
};

// Copy and update age
const updatedUser = {
  ...user1,
  city: 'Pune'
};

console.log("Original:", user1);
// { name: 'Kalyani', course:'Comp' }

console.log("Updated:", updatedUser);
// { name: 'Kalyani',  course:'Comp', city: "Pune" }

//destructuring array 
const colors = ["red", "green", "blue","orange"];
const [firstColor, secondColor,...others] = colors;
console.log(firstColor);   // "red"
console.log(secondColor);  // "green"
console.log(others);

//destructuring object
const student = {
  name: "Kalyani",
  course: "Computer Science"
};
const { name, course } = student;
console.log(name);   // "Kalyani"
console.log(course); // "Computer Science"
