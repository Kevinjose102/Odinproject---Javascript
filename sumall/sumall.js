function sumAll(start, end){

    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    if(start < 0 || end < 0) return "ERROR";

    if(start > end){
        let temp = start;
        start = end;
        end = temp;
    }
    
    let sum = 0;
    for(let num = start; num <= end; num++){
        sum+=num;
    }
    return sum;
}

module.exports = sumAll;