const Foods = require('../model/Food');

module.exports = {
  index(req, resp) {

    const barbecue = Foods.barbecueFood;
    const dinner = Foods.dinnerFood;
    const kids = Foods.kidsFood;
    const pizza = Foods.pizzaFood;

    const { foodType } = req.query;

    let foods = [];
    
    switch (foodType) {
      case 'barbecue':
        foods = barbecue;
        break;
      case 'dinner':
        foods = dinner;
        break;
      case 'kids':
        foods = kids;
        break;
      case 'pizza':
        foods = pizza;
        break;
    }

    return resp.json(foods);
  }
}
