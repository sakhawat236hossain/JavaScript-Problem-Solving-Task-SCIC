function isPalindrome(str) {
    const originalStr = str.toLowerCase();
    
    const reversedStr = originalStr.split("").reverse().join("");
    
    return originalStr === reversedStr;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 