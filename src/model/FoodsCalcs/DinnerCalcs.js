const GlobalCalcs = require('./GlobalCalcs');
const globalCalcs = new GlobalCalcs();
const BarbecueCalcs = require('./BarbecueCalcs');
const barbecueCalcs = new BarbecueCalcs();

class DinnerCalcs {


  beanCalcs(person) {
    let amount = person * 0.090;

    console.log(`${Math.ceil(amount)}kg de Feijão`)

    return Math.ceil(amount);
  }

  strogonoffCalcs(person) {
    let amount = person * 0.300;

    console.log(`${amount}kg de Strogonoff`);

    return amount;
  }

  dinner(person, foods = []) {
    let foodAmount = [];
    let riceAmount = 0;
    let beanAmount = 0;
    let farofaAmount = 0;
    let strogonoffAmount = 0;
    let beefAmount = 0;
    let chickenAmount = 0;

    for (let i = 0; i < foods.length; i++){
      switch (foods[i]) {
        case 'Arroz':
          riceAmount = globalCalcs.riceCalcs(person)
          break;
        case 'Feijão':
          beanAmount = this.beanCalcs(person);
          break;
        case 'Farofa':
          farofaAmount = globalCalcs.farofaCalcs(person);
          break;
        case 'Strogonoff':
          strogonoffAmount = this.strogonoffCalcs(person);
          break;
        case 'Carne Bovina':
          beefAmount = barbecueCalcs.beefCalcs(person);
          break;
        case 'Frango':
          chickenAmount = barbecueCalcs.chickenCalcs(person);
          break;
      }
    }

    foodAmount.push(riceAmount);
    foodAmount.push(beanAmount);
    foodAmount.push(farofaAmount);
    foodAmount.push(strogonoffAmount);
    foodAmount.push(beefAmount);
    foodAmount.push(chickenAmount);

    for (let i = 0; i < foodAmount.length; i++) {
      if(foodAmount[i] == 0) {
        foodAmount.splice(i, 1);
      }
    }
    
    for (let i = 0; i < foodAmount.length; i++) {
      if(foodAmount[i] == 0) {
        foodAmount.splice(i, 1);
      }
    }

    return foodAmount;

  }

}

module.exports = DinnerCalcs;