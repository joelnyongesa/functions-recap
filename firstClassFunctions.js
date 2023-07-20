// FIRST CLASS FUNCTIONS.
// let num = [1,2,3,4,5,6,7,8,9];


function handleNames(fun){
    let names = ["Joel", "Mercy", "Anne", "Hillary", "Raphael", "Mike",  "Charity"];
    fun(names);
}

// handleArray(names)
// handleArray(num)

// Functions can also be saved as a variable.
const loopThroughArray = function(array){
    for (item of array){
        console.log(item);
    }
}

// loopThroughArray(names)
// handleNames(loopThroughArray)

const capitalizeArray = function(array){
    let newArray = []
    for(item of array){
        newArray.push(item.toUpperCase());
    }
    console.log(newArray)
}

handleNames(capitalizeArray);
handleNames(loopThroughArray);