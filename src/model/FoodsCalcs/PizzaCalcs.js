class PizzaCalcs {

  eightCalcs(person) {
    let amount = Math.ceil(person * 4)/8;

    console.log(`${amount}un de Pizza`)

    return amount;
  }

  fourCalcs(person) {
    let amount = Math.ceil(person * 3)/4;

    console.log(`${amount}un de Pizza`);

    return amount;
  }

  pizza(person, foods = []) {
    let foodAmount = [];
    let eight = 0;
    let four = 0;

    let percentage = 0;


    switch (foods.length) {
      case 1:
        percentage = 100;
        break;
      case 2:
        percentage = 50;
        break;
    }

    for (let i = 0; i < foods.length; i++) {
      switch (foods[i]) {
        case '8 pedaços':
          eight = (this.eightCalcs(person) * percentage)/100;
          break;
        case '4 pedaços':
          four = (this.fourCalcs(person) * percentage)/100;
          break;
      }
    }

    foodAmount.push(eight);
    foodAmount.push(four);

    for (let i = 0; i < foodAmount.length; i++) {
      if(foodAmount[i] == 0) {
        foodAmount.splice(i, 1);
      }
    }

    return foodAmount;
  }

}

module.exports = PizzaCalcs;