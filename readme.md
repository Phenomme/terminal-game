# Food Shop Management Game

## Overview

This project is a simple text-based management game where players run a food shop. The objective is to buy ingredients, prepare meals, and sell them for profit while managing the available stock of ingredients and money.

## Features

- **Buy Ingredients**: Players can buy ingredients such as sauce, meat, dough, bread, and more. Each ingredient has a price and a limited stock.
- **Prepare Meals**: There are three types of meals that can be prepared: pizza, sub (sandwich), and pasta. Each meal requires specific ingredients to be made.
- **Sell Meals**: Once the meal is prepared, it can be sold for a profit. The game automatically deducts ingredients from the stock and adds money for each sold meal.
- **Random Orders**: The game generates random meal orders, and players need to manage their stock efficiently to fulfill these orders.

## How to Play

1. **Start the Game**:
   Upon starting the game, you will be prompted to enter your name. After that, you'll be provided with an initial amount of $200 and a list of available ingredients and their quantities.

2. **Buying Ingredients**:
   You can buy ingredients by typing the name of the ingredient and the quantity you want to purchase. Make sure you have enough money to cover the cost.

3. **Preparing Meals**:
   The game will automatically generate random orders for pizza, subs, and pasta. Each meal requires specific ingredients:
   - **Pizza**: Sauce, meat, dough
   - **Sub**: Meat, oregano, bread
   - **Pasta**: Noodles, sauce, oregano
   
   If you have enough stock of the required ingredients, the game will prepare the meal and deduct the ingredients from your inventory.

4. **Earning Money**:
   After preparing a meal, it is automatically sold, and the money is added to your balance. Each meal has a fixed sell price of $10.

5. **Loop Until Done**:
   You can keep buying ingredients and making meals until you decide to stop by typing "done" when prompted.

## Code Structure

- **Ingredients**: An array of objects representing the ingredients, each with a name, stock, and price.
- **Meals**: A list of meals, each with a name and a selling price.
- **Money Management**: The player starts with $200 and spends it on ingredients. Profits are made by selling meals.
- **Random Orders**: Orders are randomly generated using a function, and the player must use their stock of ingredients to fulfill them.
- **Cooking Logic**: The game checks if the player has enough ingredients for a given order, and if so, the meal is prepared, and the player's money increases.
