//1. Write a program to reverse a string.
function reverse() {
    const str = "hello";
    const arr = str.split("");
    var start = 0, end = arr.length - 1;
    while (start < end) {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
    const reversed = arr.join("");
    console.log(`Reverse of the string ${str} is ${reversed}`);
}
reverse();

// 2.Write a program that prints numbers from 1 to 15, but for multiples of 3, print FIZ instead of the number, and for multiples of 5, print BUZZ. For numbers that are multiples of both 3 and 5, print FIZBUZZ.
function printNums() {
    for (var i = 1; i < 16; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz")
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log("Neither divisbilble by 5 nor by 3")
        }
    }
}
printNums();

//3. Write a program to find second largest number in an array
function sec_large() {
    const arr = [2, 19, 15, 12, 3];
    let largest = 0, second_largest = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            second_largest = largest;
            largest = arr[i];
        }
        else if (arr[i] > second_largest && arr[i] !== largest) {
            second_largest = arr[i];
        }
    }
    console.log("Second largest:", second_largest);

}
sec_large();

//4. Write a program to check if a number is a perfect square
function sq(){
 const num=20;
 const sqrt=Math.sqrt(num);
 if(Number.isInteger(sqrt)){
    console.log(`${num} is a perfect square`)
 }
 else{
    console.log(`${num} is not a perfect square`);
 }
}
sq();

//5.Program to calculate sum of all digits in a number
function sum2(){
    let num=12345;
    let sum=0;
   while(num>0){
       sum+=num%10;
       num=Math.floor(num/10);
    }
    console.log("Sum of all numbers is", sum);
}
sum2();

//6. Write a program to calculate factorial of a number
function fact(num){
    let fact=1;
    for(var i=1;i<=num;i++){
       fact=fact*i;
    }
    console.log("Factorial of a number is",fact);
}
fact(4);

//7. Write a program to remove duplicates from an array so that each element appears only once
function remDup(){
var arr=[1, 2, 2, 3, 4, 4, 5];
let result=[];
for(var i=0;i<arr.length;i++){
let found=false;
for( var j=0;j<result.length;j++){
    if(arr[i]===result[j]){
        found=true;
        break;
    }
}
if(!found){
result.push(arr[i]);
}
}
console.log("After removing all duplicates:", result);
}
remDup();

//8. Write a program to find number of words in the given sentence
function wordCount(){
let sentence="Logic building is fun";
    let count=1;
    for(let i=0;i<sentence.length;i++){
     if(sentence[i]== ' '){
        count++;
     }   
    }
    console.log(`Number of words in the given sentence ${sentence} is: ${count}` );
}
wordCount();

//9. Write a program to find the first character in a string that doesn't repeat
function firstChar(){
   let string="swiss";
   let arr=string.split("");
   for(let i=0;i<arr.length;i++){
    let repeat=false;
    for(let j=0;j<arr.length;j++){
        if(arr[i]===arr[j] && i!=j){
            repeat=true;
            break;
        }
    }
        if(!repeat){
           console.log(arr[i]); 
           return;
        }
    } 
   }
firstChar();
//optimized code
function firstChar2(){
   let str="swiss";
   let freq={};
   for(let char of str ){
   freq[char] = (freq[char] || 0) + 1;
   }
   for(let char of str){
    if(freq[char]==1){
        console.log("First non repeated character in string",char);
        return;
    }
   }
}
firstChar2();