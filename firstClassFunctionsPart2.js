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

function printFriends(foo){
    console.log(foo(friends))
}

function printFriendNames(array){
    for(friend of array){
        console.log(friend.name)
    }
}

// printFriends(printFriendNames)

// Function to get ages
function printAges(array){
    for(friend in array){
        console.log(friend.age)
    }
}

printFriends(printAges);