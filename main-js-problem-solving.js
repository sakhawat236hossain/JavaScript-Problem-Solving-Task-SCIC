
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

