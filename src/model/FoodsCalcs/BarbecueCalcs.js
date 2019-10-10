const GlobalCalcs = require('./GlobalCalcs');
const globalCalcs = new GlobalCalcs();

class BarbecueCalcs {

  beefCalcs(person) {
    let amount = person * 0.400;

    console.log(`${amount}kg de Carne`)

    return amount;
  }

  chickenCalcs(person) {
    let amount = person * 0.200;

    console.log(`${amount}kg de Frango`)

    return amount;
  } 

  sausageCalcs(person) {
    let amount = person * 0.200;

    console.log(`${amount}kg de Linguiça`)

    return amount;
  } 

  barbecue(person, foods = []) {
    let foodAmount = [];
    let beefAmount = 0;
    let chickenAmount = 0;
    let sausageAmount = 0;
    let riceAmount = 0;
    let farofaAmount = 0;
    let vinagreteAmount = 0;
    let maioneseAmount = 0;

    for (let i = 0; i < foods.length; i++) {
      switch (foods[i]) {
        case 'Carne Bovina':
          beefAmount = this.beefCalcs(person);
          break;
        case 'Frango':
          chickenAmount = this.chickenCalcs(person);
          break;
        case 'Linguiça':
          sausageAmount = this.sausageCalcs(person);
          break;
        case 'Arroz':
          riceAmount = globalCalcs.riceCalcs(person);
          break;
        case 'Farofa':
          farofaAmount = globalCalcs.farofaCalcs(person);
          break;
        case 'Vinagrete':
          vinagreteAmount = globalCalcs.vinagreteCalcs(person);
          break;
        case 'Maionese':
          maioneseAmount = globalCalcs.maioneseCalcs(person);
      }
    }

    foodAmount.push(beefAmount);
    foodAmount.push(chickenAmount);
    foodAmount.push(sausageAmount);
    foodAmount.push(riceAmount);
    foodAmount.push(farofaAmount);
    foodAmount.push(vinagreteAmount);
    foodAmount.push(maioneseAmount);

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

module.exports = BarbecueCalcs;