const GlobalCalcs = require('./FoodsCalcs/GlobalCalcs');
const BarbecueCalcs = require('./FoodsCalcs/BarbecueCalcs');
const DinnerCalcs = require('./FoodsCalcs/DinnerCalcs');
const KidsCalcs = require('./FoodsCalcs/KidsCalcs');
const PizzaCalcs = require('./FoodsCalcs/PizzaCalcs');
const DrinksCalcs = require('./FoodsCalcs/DrinksCalcs');
const ChildrenDrinks = require('./FoodsCalcs/ChildrensDrinks');

const globalCalcs = new GlobalCalcs();
const barbecueCalcs = new BarbecueCalcs();
const dinnerCalcs = new DinnerCalcs();
const kidsCalcs = new KidsCalcs();
const pizzaCalcs = new PizzaCalcs();
const drinksCalcs = new DrinksCalcs();
const childrenDrinks = new ChildrenDrinks();

class Calcs {

  constructor() {

  }

  barbecue(person, foods = []) {
    const foodAmount = barbecueCalcs.barbecue(person, foods);

    return foodAmount;
  }


  dinner(person, foods = []) {
    const foodAmount = dinnerCalcs.dinner(person, foods);

    return foodAmount;
  }

  kids(person, foods = []) {
    const foodAmount = kidsCalcs.kids(person, foods);

    return foodAmount;
  }

  pizza(person, foods = []) {
    const foodAmount = pizzaCalcs.pizza(person, foods);

    return foodAmount;
  }

  drinks(person, drinks = []) {
    const drinkAmount = drinksCalcs.drinks(person, drinks);

    return drinkAmount;
  }

  childrenDrinks(children, drinks = []) {
    const drinkAmount = childrenDrinks.drinks(children, drinks);

    return drinkAmount;
  }

}

module.exports = Calcs;