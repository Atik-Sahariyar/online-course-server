const express = require("express");
const Contents = require("../../models/CourseContents/CourseContents");
const Users = require("../../models/Users/Users");
const verifyToken = require("../../middlewares/verifyToken");
const getContentsRoute = express.Router();

getContentsRoute.get("/contents/:email", verifyToken, async (req, res) => {
  try {
    const email = req.params.email;
    const query = { email: email };
    const user = await Users.findOne(query);
    const courseIds = user?.courseIds || [];

    const contentsPromises = courseIds.map(async (coursId) => {
      try {
        const filter = { courseId: coursId};
        const content = await Contents.findOne(filter);
        console.log(content);
        return content;
      } catch (error) {
        console.error("Error finding content:", error);
       res.status(500).json({ message: 'Internal server error' });
      }
    });

    // Resolve all promises concurrently using Promise.all
    const contents = await Promise.all(contentsPromises);

    // Filter out null values in case of failed queries
    const result = contents.filter((content) => content !== null);

    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error getting contents data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = getContentsRoute;
