const express = require('express');
const createNewUserController = require('../../controllers/usersControllers/createNewUserController');
const creatNewUserRoute = express.Router();


creatNewUserRoute.post('/users', createNewUserController);

module.exports = creatNewUserRoute;