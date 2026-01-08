
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


