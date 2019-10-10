class ChildrensDrinks {

  sodaCalcs(person) {
    let amount = Math.ceil(person * 0.400);

    console.log(`${amount}lts de refrigerante`)

    return amount;
  }

  juiceCalcs(person) {
    let amount = Math.ceil(person * 0.300);

    console.log(`${amount}lts de suco`);

    return amount;
  }

  waterCalcs(person) {
    let amount = Math.ceil(person * 0.200);

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

    return drinkAmount;
  }

}

module.exports = ChildrensDrinks;