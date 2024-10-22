let orderStatus = "";
const game = {
    ingredients: [
    {name: "sauce", stock: 10, price: 3 },
    {name: "meat", stock: 10, price: 5},
    {name: "dough", stock: 5, price: 2},
    {name: "oregano", stock: 10, price: 1},
    {name: "noodles", stock: 5, price: 2},
    {name: "bread", stock: 5, price: 3}],
    foodOrder: [],
    meals: [
    {name: "pizza", sellPrice: 10, sold: 0},    
    {name: "sub", sellPrice: 10, sold: 0},
    {name: "pasta", sellPrice: 10, sold: 0}],
    money: 200,
    }

const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');

function buyThing(index, orderNumber){
    orderNumber = Number(orderNumber);
    game.ingredients[index].stock += orderNumber;
    game.money -= (game.ingredients[index].price * orderNumber);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
 
 function populateOrders() {
    for (let i= 0; i < 20; i++) {
    const removedItem =game.foodOrder.pop()
    }
    for  (let i= 0; i < 20; i++) {
        game.foodOrder.push(getRandomInt(3))    
    }
 }
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
        game.meals[0].sold++;

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
        game.meals[1].sold++;


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
        game.meals[2].sold++;


    }
 }
 function init(){
console.log(`Its's time to buy ingredients!\n`);
console.log(`You have: \n Sauce: ${game.ingredients[0].stock}, \n Meat: ${game.ingredients[1].stock}, \n Dough: ${game.ingredients[2].stock}, \n Oregano: ${game.ingredients[3].stock}, \n Noodles: ${game.ingredients[4].stock}, \n Bread: ${game.ingredients[5].stock}`)

while (orderStatus !== "done") {
    
    console.log(`\nYou have $${game.money} left.`);
    console.log(game.ingredients)

const order = prompt('Type what you want to buy or press \'done\' to exit? ');

if (order.toLowerCase() === 'sauce') {
    console.log(`Sauce cost ${game.ingredients[0].price}`) 
        const newStock = prompt( `How many do you need? `)
        buyThing(0,newStock)
} else if (order.toLowerCase() === 'meat' ) {
    console.log(`Meat cost ${game.ingredients[1].price}`) 
        const newStock = prompt( `How many do you need? `)
        buyThing(1,newStock)
} else if (order.toLowerCase() === 'dough' ) {
    console.log(`Dough cost ${game.ingredients[2].price}`) 
        const newStock = prompt( `How many do you need? `)
        buyThing(2,newStock)
} else if (order.toLowerCase() === 'oregano' ) {
    console.log(`Oregano cost ${game.ingredients[3].price}`) 
        const newStock = prompt( `How many do you need? `)
        buyThing(3,newStock)
} else if (order.toLowerCase() === 'noodles' ) {
    console.log(`Noddles cost ${game.ingredients[4].price}`) 
        const newStock = prompt( `How many do you need? `)
        buyThing(4,newStock)
} else if (order.toLowerCase() === 'bread' ) {
    console.log(`Bread cost ${game.ingredients[5].price}`) 
        const newStock = prompt( `How many do you need? `)
        buyThing(5,newStock)
} else if (order.toLowerCase() === "done") {
        orderStatus = "done"
} else {
    console.log("error")
}
}

 }

console.log(`\nGood morning ${username}!\n`);


for (let i = 0; i < 10; i++) {    
init();
console.log(`Going to dinner!`)

 populateOrders(); 

 for (let i= 0; i < 20; i++) {
     makeFood(game.foodOrder.pop());
    }

console.log(`You sold: `);
game.meals.forEach(meal => {
    console.log(`${meal.sold} ${meal.name}`);              
});
console.log(`\n You have $${game.money}`);
console.log(`You have: \n Sauce: ${game.ingredients[0].stock}, 
        Meat: ${game.ingredients[1].stock}, 
        Dough: ${game.ingredients[2].stock}, 
        Oregano: ${game.ingredients[3].stock}, 
        Noodles: ${game.ingredients[4].stock}, 
        Bread: ${game.ingredients[5].stock}`)

console.log('\n A new day begins! yeah here we go...');
}      