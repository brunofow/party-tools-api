const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const Food = require('./model/Food');
const Calcs = require('./model/Calcs');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/test', (req, resp) => {
  let calcs = new Calcs();
  const drinksResult = calcs.drinks(50, [
    'Cerveja',
    'Refrigerante',
    'Suco',
    'Agua'
  ])
  return resp.json({ 
    drinksResult
  })
})

app.listen(3333);