// **** Manipuler les Tableaux (Avancé) ****

// ---- La méthode Filter ----

// let ages = [5, 25, 50, 10, 7, 58];

// Filter age >= 25

// let filtredAges = ages.filter(age => {
//     return age < 25
// })

//une seul instruction
// let filtredAges = ages.filter(age => age < 25)

// console.log(filtredAges, ages)

// example 2 for filter

// let users = [
//     { name: "Basma", active: true },
//     { name: "Walid", active: false },
//     { name: "Mohammed", active: true },
//     { name: "Yassine", active: false },
//     { name: "Mouad", active: true },
// ]

// result =  users.filter(user => user.active == true)
// or
// result =  users.filter(user => user.active)

// result =  users.filter(user => user.active == false)
// or la négation
// result =  users.filter(user => !user.active)

// console.log(result)

// ---- La méthode Map ----

// let ages = [5, 25, 50, 10, 7, 58];

// let result = ages.map(age => age + 10)

// console.log(result, ages)


// let users = [
//     { name: "Basma", active: true },
//     { name: "Walid", active: false },
//     { name: "Mohammed", active: true },
//     { name: "Yassine", active: false },
//     { name: "Mouad", active: true },
// ]

// result = users.map(user => {
//     if(user.active) {
//         return {
//             name: user.name.toUpperCase(),
//             active: user.active
//         }
//     }else {
//         return user
//     }
// })


// console.log(result)

// ----  La méthode Reduce -----

let ages = [5, 25, 50, 10, 7, 58];

let result = ages.reduce((acc, age) => {
    return acc + age
}, 0)

console.log(result);

// ---- La méthode Find ----

