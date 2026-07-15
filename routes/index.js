const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.maxwellRoute);
routes.get('/murombedzi', lesson1Controller.murombedziRoute)
routes.get('/wadza', lesson1Controller.wadzaRoute);

module.exports = routes;