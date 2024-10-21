const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');

// let pizza = ["sauce", "meat", "cheese"]
// let sub = ["bread", "meat"]
// let pasta = [""] 

//pizza (sauce, meat, dough)
//sandwich (bread, meat, oregano)
//pasta (noodles, sauce, oregano)
// let sauce = 10
// let meat = 10
// let dough = 5
// let oregano = 10
// let noodles = 5
// let bread = 5
let money = 200

const game = {
    ingredients: [
    {name: "sauce", stock: 10, price: 3 },
    {name: "meat", stock: 10, price: 5},
    {name: "dough", stock: 5, price: 2},
    {name: "oregano", stock: 10, price: 1},
    {name: "noodles", stock: 5, price: 2},
    {name: "bread", stock: 5, price: 3},

    ],
    foodOrder: [],
    meals: [
    {name: "pizza", sellPrice: 10},
    {name: "sub", sellPrice: 10},
    {name: "pasta", sellPrice: 10}
]
    }

console.log(`\nGood morning ${username}!\n`);
console.log(`Its's time to buy ingredients!`);
console.log(`[You have $ ${money} left.]\n`);
console.log(`You have: \n Sauce: ${game.ingredients[0].stock}, \n Meat: ${game.ingredients[1].stock}, \n Dough: ${game.ingredients[2].stock}, \n Oregano: ${game.ingredients[3].stock}, \n Noodles: ${game.ingredients[4].stock}, \n Bread: ${game.ingredients[5].stock}`)

const order = prompt('What do you want to buy? ');

if (order === 'sauce') {
    console.log(`Sauce cost ${game.ingredients[0].price}`) 
        const newStock = prompt( `How many do you need? `)
} else if (order === 'meat') {
    console.log(`Meat cost ${game.ingredients[1].price}`) 
        const newStock = prompt( `How many do you need? `)
} else if (order === 'dough') {
    console.log(`Dough cost ${game.ingredients[2].price}`) 
        const newStock = prompt( `How many do you need? `)
} else if (order === 'oregano') {
    console.log(`Oregano cost ${game.ingredients[3].price}`) 
        const newStock = prompt( `How many do you need? `)
} else if (order === 'noodles') {
    console.log(`Noddles cost ${game.ingredients[4].price}`) 
        const newStock = prompt( `How many do you need? `)
} else if (order === 'bread') {
    console.log(`Bread cost ${game.ingredients[5].price}`) 
        const newStock = prompt( `How many do you need? `)
} else (order === done)
        console.log(`Going to dinner!`)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
 
 function populateOrders() {
    for (let i= 0; i < 20; i++) {
    const removedItem =game.foodOrder.pop()
    }
    for  (let i= 0; i < 20; i++) {
        // game.foodOrder.push(game.meals[getRandomInt(3)]) 
        //Cut out the middle man, we can just have this be an array of integers 0-2 and reference the meals object
        game.foodOrder.push(getRandomInt(3))
    
    }
 }
 populateOrders();
 console.log(game.foodOrder)
