const Calcs = require('../model/Calcs');

const calcs = new Calcs();


module.exports = {
  index(req, resp) {

    const { person, children, foods, drinks } = req.body;

    let adultsFood = [];
    let childrensFood = [];
    let adultsDrinks = calcs.drinks(person, drinks)
    let childrensDrinks = calcs.childrenDrinks(children, drinks);


    // let calcDrinks = calcs.drinks(person, drinks)

    // drinksResult.push(calcDrinks)
    
    const { foodType } = req.query;

    switch (foodType) {
      case 'barbecue':
        adultsFood = calcs.barbecue(person, foods);
        childrensFood = calcs.barbecue(children, foods);
        break;
      case 'dinner':
        adultsFood = calcs.dinner(person, foods);
        childrensFood = calcs.dinner(children, foods);
        break;
      case 'kids':
        adultsFood = calcs.kids(person, foods);
        childrensFood = calcs.kids(children, foods);
        break;
      case 'pizza':
        adultsFood = calcs.pizza(person, foods);
        childrensFood = calcs.pizza(children, foods);
        break;
    }

    
    const totalFood = adultsFood.map((adultFood, index, childrensFood) => {
      return adultFood + childrensFood[index] / 2;
    })

    const totalDrinks = adultsDrinks.map((adultDrink, index) => {
      return adultDrink + childrensDrinks[index];
    })

    let result = [];

    result.push(totalFood);
    result.push(totalDrinks);

    return resp.json(result);

  }
}