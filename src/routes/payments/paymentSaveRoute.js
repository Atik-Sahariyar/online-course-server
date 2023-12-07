const express = require('express');
const Payments = require('../../models/Payments/Payments');
const verifyToken = require('../../middlewares/verifyToken');
const paymentSaveRoute = express.Router();


paymentSaveRoute.post('/payments', verifyToken, async(req, res) => {
    
    const paymentInfo = await req.body; 
    const payment  = new Payments(paymentInfo);
    const result = await payment.save();
    console.log(result);
    res.send(result)
  });

  module.exports = paymentSaveRoute;