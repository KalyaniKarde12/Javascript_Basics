function strPalindrome() {
    const str = 'madm';
    const arr = str.split('');
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        if (arr[start] !== arr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
console.log(strPalindrome());

//2 Flatten a nested array

function flatten(arr) {
    let result = [];

    for (let element of arr) {
        if (Array.isArray(element)) {
            result = result.concat(flatten(element));
        } else {
            result.push(element);
        }
    }

    return result;
}

const nestedArray = [1, [2, [3, [4, 5]]]];
const flatArray = flatten(nestedArray);

console.log(flatArray);

//3. Sort an array of numbers without using Array.sort()
function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

const numbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = bubbleSort(numbers);

console.log(sortedNumbers);

//4. Find the most frequent element in an array
function mostFrequent(arr) {
    const freqMap = {};
    let maxCount = 0;
    let mostFreqElement;

    for (let elem of arr) {
        freqMap[elem] = (freqMap[elem] || 0) + 1;

        if (freqMap[elem] > maxCount) {
            maxCount = freqMap[elem];
            mostFreqElement = elem;
        }
    }

    return mostFreqElement;
}

const numbers1 = [1, 3, 2, 3, 4, 3, 2, 1];
console.log(mostFrequent(numbers));

//5. Capitaliza the first letter of the word in the sentce
function romanToInt(s) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        // If current is less than next, subtract it
        if (currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }

    return total;
}

// Example usage:
console.log(romanToInt("III"));     // Output: 3
console.log(romanToInt("MCMXCIV")); // Output: 1994

//6. Capital the first letter of each word in a sentence
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

const input1 = "hello world! this is javascript.";
const result = capitalizeWords(input1);
console.log(result); // Output: "Hello World! This Is Javascript."

// 7. Find gcd
function gcdIterative(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcdIterative(48, 18)); // Output: 6

//8. Group anagrams from an array of words
function groupAnagrams(words) {
    const map = {};

    for (let word of words) {
        const sorted = word.split('').sort().join('');


        if (map[sorted]) {
            map[sorted].push(word);
        } else {
            map[sorted] = [word];
        }
    }

    return Object.values(map);
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));

//9. Rotate and array by k steps
function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // Handle cases where k > n

  // Slice and rearrange
  const rotated = arr.slice(-k).concat(arr.slice(0, n - k));
  return rotated;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotateArray(arr, k)); // Output: [5, 6, 7, 1, 2, 3, 4]

//10. Merge two sorted array
function mergeSortedArrays(arr1, arr2) {
  let i = 0, j = 0;
  const merged = [];

  // Compare elements from both arrays and push the smaller one
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

console.log(mergeSortedArrays(arr1, arr2));


