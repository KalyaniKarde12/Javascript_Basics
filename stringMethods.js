const str="Kalyani"
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//charAt is used to return the char at specific index
console.log(str.charAt(2));

//includes(substring)- to check if string contains that substring and returns true accordingly
console.log(str.includes('al'));

//indexOf-- to get the position
console.log(str.indexOf('l'));

//slice(start, end) – to extract part of string
console.log(str.slice(0,4));

//trim() remove trialing and leading spaces
const str2=" Hi "
console.log(str2);
console.log(str2.trim());

