function removeFromArray(array, ...args){
    let newArray = [];
    //traverses through all the elements of the array
    array.forEach((item) => {
        // args! means that all the items or elements expect the 
        //once given in the argument list will be "pushed"(push()) to the newArray[]
        if(!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

module.exports = removeFromArray;