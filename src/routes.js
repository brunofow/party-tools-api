const express = require('express');

const FoodController = require('./controllers/FoodController');
const CalcController = require('./controllers/CalcController');

const routes = express.Router();

routes.get('/foods', FoodController.index);

routes.post('/calc', CalcController.index);

module.exports = routes;