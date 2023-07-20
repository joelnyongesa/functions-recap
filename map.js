// Initializing an array
let friends = [
    {
        name: "Joel",
        age: 30,
        hobby: "swimming"
    },
    {
        name: "Daisy",
        age: 25,
        hobby: "dancing"
    },
    {
        name: "Raphael",
        age: 27,
        hobby: "watching"
    },
    {
        name: "Faith",
        age: 32,
        hobby: "cooking"
    },
    {
        name: "Tamara",
        age: 18,
        hobby: "singing"
    },
    {
        name: "Dancan",
        age: 17,
        hobby: "eating"
    }
]

// Return an array of names
// Loop through the array
// For every item in array, update/change/transform that item without mutating the original array.
// Make a new array to hold the updated/changed/transformed array.

function loopAndUpdate(array, updateFoo){
    const updatedArray = [];
    for (let item of array){
        // console.log(array)
        // console.log(updatedArray)
        updatedArray.push(updateFoo(item))
    }
    console.log(updatedArray)
}

// loopAndUpdate(friends);



// Return an array of names
function names(item){
    return item.name
}
// Return an array of ages
function ages(item){
    return item.age;
}
// return an array of hobbies
function hobbies(item){
    return item.hobby
}
// return half their age
function halfAge(item){
    // To prevent mutation, use the assign() method.
    let itemCopy = Object.assign({}, item)
    itemCopy.age = Math.floor(itemCopy.age/2)
    return itemCopy
}


loopAndUpdate(friends, halfAge)
console.log(friends)