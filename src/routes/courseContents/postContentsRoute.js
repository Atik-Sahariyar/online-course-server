const express = require('express');
const verifyToken = require('../../middlewares/verifyToken');
const Contents = require('../../models/CourseContents/CourseContents');
const postContentsRoute = express.Router();

postContentsRoute.post('/courseContents', verifyToken, async(req, res) => {
    
   try{
    const corseContent = await req.body; 
    const content  = new Contents(corseContent);
    const result = await content.save();
    console.log(result);
    res.send(result)
   }catch (error) {
    console.error('Error post course content:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
  });

  module.exports = postContentsRoute;