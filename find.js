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


// Loop through our friends and return the first object whose condition returns true based on our callback function.
function loopThroughAndFind(array, finder){
    let result = null;
    for(let item of array){
        if(finder(item) === true){
            result = item
            break
        }
    }
    return result
}

// Will find a given friend.
function isFriend(friend){
    return friend.name === "Daisy";
}

// Search based on age.
function findAge(friend){
    return friend.age < 25
}


// Simplify the above.
const foundFriend = friends.find((friend) => friend.age < 25)


// console.log(loopThroughAndFind(friends, findAge))
console.log(foundFriend)