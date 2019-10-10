class KidsCalcs {

  salgadosCalc(person, salgados = []) {
    let salgadosAmount = 0


    let numberSalgados = salgados.length;

    salgadosAmount = (person * 15)/numberSalgados;

    return salgadosAmount;
  }

  kids(person, foods = []) {
    let foodAmount = [];
    let coxinha = 0;
    let risole = 0;
    let bolinhoDeQueijo = 0;
    let quibe = 0;
    let esfiha = 0;
    let empadinha = 0;
    
    let percentage = 0;

    switch (foods.length) {
      case 1:
        percentage = 100
        break;
      case 2:
        percentage = 50
        break;
      case 3:
        percentage = 33.33
        break;
      case 4:
        percentage = 25
        break;
      case 5:
        percentage = 20
        break;
      case 6:
        percentage = 16.66
        break;
      

    }
    
    for (let i = 0; i < foods.length; i++) {
      switch (foods[i]) {
        case 'Coxinha':
          coxinha = Math.ceil(this.salgadosCalc(person, foods) * percentage)/100;
          break;
        case 'Risole':
          risole = Math.ceil(this.salgadosCalc(person, foods) * percentage)/100;
          break;
        case 'Bolinho de Queijo':
          bolinhoDeQueijo = Math.ceil(this.salgadosCalc(person, foods) * percentage)/100;
          break;
        case 'Quibe':
          quibe = Math.ceil(this.salgadosCalc(person, foods) * percentage)/100;
          break;
        case 'Esfiha':
          esfiha = Math.ceil(this.salgadosCalc(person, foods) * percentage)/100;
          break;
        case 'Empadinha':
          empadinha = Math.ceil(this.salgadosCalc(person, foods) * percentage)/100;
          break;
        
      }
    }

    foodAmount.push(coxinha);
    foodAmount.push(risole);
    foodAmount.push(bolinhoDeQueijo);
    foodAmount.push(quibe);
    foodAmount.push(esfiha);
    foodAmount.push(empadinha);

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

    console.log(`${Math.ceil(coxinha)}un de coxinha`)
    console.log(`${Math.ceil(risole)}un de risole`)
    console.log(`${Math.ceil(bolinhoDeQueijo)}un de Bolinho de Queijo`)
    console.log(`${Math.ceil(quibe)}un de quibe`)
    console.log(`${Math.ceil(esfiha)}un de esfiha`)
    console.log(`${Math.ceil(empadinha)}un de empadinha`)

    return foodAmount;
  }



}

module.exports = KidsCalcs;