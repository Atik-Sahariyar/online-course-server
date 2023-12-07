const express = require('express');
const getAdminRoute = express.Router();
const getAdminController = require('../../controllers/usersControllers/getAdminController');
const verifyToken = require('../../middlewares/verifyToken');


getAdminRoute.get('/users/admin/:email',/*  verifyToken, */ getAdminController);

module.exports = getAdminRoute;