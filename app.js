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
],

    money: 200

    }

console.log(`\nGood morning ${username}!\n`);
console.log(`Its's time to buy ingredients!`);
console.log(`[You have $ ${game.money} left.]\n`);
console.log(`You have: \n Sauce: ${game.ingredients[0].stock}, \n Meat: ${game.ingredients[1].stock}, \n Dough: ${game.ingredients[2].stock}, \n Oregano: ${game.ingredients[3].stock}, \n Noodles: ${game.ingredients[4].stock}, \n Bread: ${game.ingredients[5].stock}`)

function buyThing(x,y){
    game.ingredients[x].stock = game.ingredients[x].stock+ Number(y);
    game.money = game.money - (game.ingredients[x].price * Number(y))
}
// console.log(game.ingredients)
// console.log(game.money)
// buyThing(0,2)
// console.log(game.ingredients)
let z = ""
while (z !== "done") {



console.log(game.money)
console.log(game.ingredients)


const order = prompt('What do you want to buy? ');

if (order.toLowerCase() === 'sauce') {
    console.log(`Sauce cost ${game.ingredients[0].price}`) 
        const newStock = prompt( `How many do you need? `)
        buyThing(0,newStock)
} else if (order.toLowerCase() === 'meat') {
    console.log(`Meat cost ${game.ingredients[1].price}`) 
        const newStock = prompt( `How many do you need? `)
        buyThing(1,newStock)
} else if (order.toLowerCase() === 'dough') {
    console.log(`Dough cost ${game.ingredients[2].price}`) 
        const newStock = prompt( `How many do you need? `)
        buyThing(2,newStock)
} else if (order.toLowerCase() === 'oregano') {
    console.log(`Oregano cost ${game.ingredients[3].price}`) 
        const newStock = prompt( `How many do you need? `)
        buyThing(3,newStock)
} else if (order.toLowerCase() === 'noodles') {
    console.log(`Noddles cost ${game.ingredients[4].price}`) 
        const newStock = prompt( `How many do you need? `)
        buyThing(4,newStock)
} else if (order.toLowerCase() === 'bread') {
    console.log(`Bread cost ${game.ingredients[5].price}`) 
        const newStock = prompt( `How many do you need? `)
        buyThing(5,newStock)
} else if (order.toLowerCase() === "done") {
        console.log(`Going to dinner!`)
        z = "done"
} else {
    console.log("error")
}

console.log(game.money)

console.log(game.ingredients)
}

console.log("exit works")

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
 //console.log(isNaN(game.meals[0].sellPrice));
 

 function makeFood(x){
    if (x === 0 
        && game.ingredients[0].stock > 0 
        && game.ingredients[1].stock > 0 
        && game.ingredients[2].stock > 0) {
        // ingredients for pizza
        game.ingredients[0].stock--;
        game.ingredients[1].stock--;
        game.ingredients[2].stock--;        
        game.money += Number(game.meals[0].sellPrice);

    }else if(x === 1 
        && game.ingredients[1].stock > 0 
        && game.ingredients[3].stock > 0 
        && game.ingredients[5].stock > 0)
    {
        // ingredients for sub
        game.ingredients[1].stock--;
        game.ingredients[3].stock--;
        game.ingredients[5].stock--;
        game.money += Number(game.meals[1].sellPrice);

    }
    else if( x === 2 
        && game.ingredients[0].stock > 0 
        && game.ingredients[3].stock > 0 
        && game.ingredients[4].stock > 0)
    {
        // ingredients for pasta
        game.ingredients[0].stock--;
        game.ingredients[3].stock--;
        game.ingredients[4].stock--;   
        game.money += Number(game.meals[2].sellPrice);

    }
 }
 //console.log(game.foodOrder);
 console.log(game.ingredients);
 console.log(game.money);

 for (let i= 0; i < 20; i++) {
    //console.log(game.foodOrder.pop());    
     makeFood(game.foodOrder.pop());
    }
    console.log(game.ingredients);
    console.log(game.money );