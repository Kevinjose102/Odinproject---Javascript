function repeatString(word, times){
    if(times < 0){
        return "ERROR";
    }
    let string = "";
    for (let i = 1; i <= times; i++){
        string += word;   
    }
    return string;
}

module.exports = repeatString;