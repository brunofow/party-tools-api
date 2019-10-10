class DrinksCalcs {

  beersCalcs(person, drinks = []) {
    let amount = 0;
    if (drinks.length <= 1) {
      amount = person * 1;
    } else {
      amount = person * 0.700;
    }

    console.log(`${amount}lts de cerveja`)

    return amount;
  }

  sodaCalcs(person) {
    let amount = Math.ceil(person * 0.600);

    console.log(`${amount}lts de refrigerante`)

    return amount;
  }

  juiceCalcs(person) {
    let amount = Math.ceil(person * 0.500);

    console.log(`${amount}lts de suco`);

    return amount;
  }

  waterCalcs(person) {
    let amount = Math.ceil(person * 0.300);

    console.log(`${amount}lts de água`);
    
    return amount;
  }

  drinks(person, drinks = []) {
    let drinkAmount = [];
    let beerAmount = 0;
    let sodaAmount = 0;
    let juiceAmount = 0;
    let waterAmount = 0;

    for (let i = 0; i < drinks.length; i++) {
      switch (drinks[i]) {
        case 'Cerveja':
          beerAmount = this.beersCalcs(person, drinks);
          break;
        case 'Refrigerante':
          sodaAmount = this.sodaCalcs(person)
          break;
        case 'Suco':
          juiceAmount = this.juiceCalcs(person);
          break;
        case 'Agua':
          waterAmount = this.waterCalcs(person);
          break;
      }
    }

    drinkAmount.push(beerAmount);
    drinkAmount.push(sodaAmount);
    drinkAmount.push(juiceAmount);
    drinkAmount.push(waterAmount);

    for (let i = 0; i < drinkAmount.length; i++) {
      if(drinkAmount[i] == 0) {
        drinkAmount.splice(i, 1);
      }
    }
    
    for (let i = 0; i < drinkAmount.length; i++) {
      if(drinkAmount[i] == 0) {
        drinkAmount.splice(i, 1);
      }
    }

    return drinkAmount;
  }

}

module.exports = DrinksCalcs;