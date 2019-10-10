const BarbecueCalcs = require('./FoodsCalcs/BarbecueCalcs');
const DinnerCalcs = require('./FoodsCalcs/DinnerCalcs');
const KidsCalcs = require('./FoodsCalcs/KidsCalcs');
const PizzaCalcs = require('./FoodsCalcs/PizzaCalcs');
const DrinksCalcs = require('./FoodsCalcs/DrinksCalcs');

const barbecueCalcs = new BarbecueCalcs();
const dinnerCalcs = new DinnerCalcs();
const kidsCalcs = new KidsCalcs();
const pizzaCalcs = new PizzaCalcs();
const drinksCalcs = new DrinksCalcs();

class ChildrensCalcs {

  constructor() {

  }

  barbecue(children, foods = []) {
    const foodAmount = barbecueCalcs.barbecue(children, foods);

    const childrenAmount = foodAmount.map(food => food / 2)

    return childrenAmount;
  }


  dinner(children, foods = []) {
    const foodAmount = dinnerCalcs.dinner(children, foods) / 2;

    return foodAmount;
  }

  kids(children, foods = []) {
    const foodAmount = kidsCalcs.kids(children, foods) / 2;

    return foodAmount;
  }

  pizza(children, foods = []) {
    const foodAmount = pizzaCalcs.pizza(children, foods) / 2;

    return foodAmount;
  }

  drinks(children, drinks = []) {
    const drinkAmount = drinksCalcs.drinks(children, drinks) / 2;

    return drinkAmount;
  }

}

module.exports = ChildrensCalcs;