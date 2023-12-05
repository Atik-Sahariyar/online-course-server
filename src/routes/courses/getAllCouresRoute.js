const express = require("express");
const Courses = require("../../models/Courses/Courses");
const getAllCourseRoute = express.Router();

getAllCourseRoute.get("/courses", async (req, res) => {
  try {
   
    const result = await Courses.find();
    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting course data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = getAllCourseRoute