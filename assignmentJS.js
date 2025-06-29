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
    console.log(reversed);
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

