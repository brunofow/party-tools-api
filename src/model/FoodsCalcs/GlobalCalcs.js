class GlobalCalcs {
  riceCalcs(person) {
    let amount = person * 0.090;

    console.log(`${Math.ceil(amount)} kg de arroz`);

    return Math.ceil(amount);

  }

  farofaCalcs(person) {
    let amount = person * 0.100;

    console.log(`${amount}kg de farofa`);

    return amount;
  }

  vinagreteCalcs(person) {
    let amount = person * 0.100;

    console.log(`${amount}kg de vinagrete`)

    return amount;
  }

  maioneseCalcs(person) {
    let amount = person * 0.200;

    console.log(`${amount}kg de maionese`)

    return amount;
  }
}

module.exports = GlobalCalcs;