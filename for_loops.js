// for of loop in javascript
// It is used to iterate over iterables such as arrays, strings, maps etc
 arr=['apple','mango','pineapple','banana'];

 for(const element of arr){
    console.log(element);
 }

 str="Kalyani"

 for(let c of str){
    console.log(c)
 }

 // for in loop is used to iterte over objects and indexes

 const obj={
    'name':'Kalyani',
    'course':'Computer',
    'class':'Final_Year'
 }
 for(const key in obj){
    console.log(key,":",obj[key]);
 }

// to access the index in an array
const a=['comp','mech','elect','civil'];
for(const index in a){
    console.log(index,":",a[index]);
}

//explored string methods in js

