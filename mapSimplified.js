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


// return an array of names
const names = friends.map((item) => item.name)

// Return ages
const ages = friends.map(agesFunction)


function agesFunction(item){
    return item.age
}
// console.log(ages)

// Return a list of hobbies
const hobbies = friends.map((item) => item.hobby)

// console.log(hobbies)

// Return half ages
const halfAges = friends.map((item) => {
    let itemCopy = Object.assign({}, item)
    itemCopy.age = Math.floor(itemCopy.age/2)
    return itemCopy
})

console.log(halfAges)