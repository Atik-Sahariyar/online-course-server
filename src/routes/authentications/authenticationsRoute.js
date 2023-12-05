const express = require('express');
const createJwtTokenController = require('../../controllers/authentications/createTotkenController');
const jwtRoute = express.Router();

jwtRoute.post('/jwt', createJwtTokenController);

module.exports = jwtRoute