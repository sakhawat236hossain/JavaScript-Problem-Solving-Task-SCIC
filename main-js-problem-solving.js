
// Problem 1: Reverse a String
function reverseString(str) {
    
    return str.split("").reverse().join("");
}

// Problem 2: Count Vowels in a String
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU"; 

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}


// Problem 3: Check for Palindrome
function isPalindrome(str) {
    const originalStr = str.toLowerCase();
    
    const reversedStr = originalStr.split("").reverse().join("");
    
    return originalStr === reversedStr;
}



// Problem 4: Find the Maximum Number in an Array
function findMax(numbers) {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }
    return max;
}

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

// Problem 6: Sum of All Numbers in an Array

function sumArray(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }

    return sum;
}

// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
    let evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }

    return evenNumbers;
}

// Problem 8: Capitalize the First Letter of Each Word in a String
function capitalizeWords(str) {
    let words = str.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    return words.join(" ");
}

// Problem 9: Find the Factorial of a Number
function findFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}