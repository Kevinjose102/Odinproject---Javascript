function reverseString(text){
    return text.split("").reverse().join("");
    //first coverts the string to an array of chars by the spilt("") function
    //then reverses the array because it is an array function and finally
    //join the chars again into a single string using join()
}

module.exports = reverseString;