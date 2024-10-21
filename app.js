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

    }

console.log(`\nGood morning ${username}!\n`);
console.log(`Its's time to buy ingredients!`);
console.log(`[You have $ ${money} left.]\n`);
console.log(`You have: \n Sauce: ${game.ingredients[0].stock}, \n Meat: ${game.ingredients[1].stock}, \n Dough: ${game.ingredients[2].stock}, \n Oregano: ${game.ingredients[3].stock}, \n Noodles: ${game.ingredients[4].stock}, \n Bread: ${game.ingredients[5].stock}`)

const order = prompt('What do you want to buy? ');

if (order === sauce)
    console.log(`Sauce cost`)
