const express = require("express");
require("dotenv").config();
const app = express();
const applyMiddleware = require("./middlewares/applyMiddleware");
const globalErrorHandler = require("./utis/globalErrorHandler");

// all api route require
const creatNewUserRoute = require("./routes/users/createNewUserRoute");
const jwtRoute = require("./routes/authentications/authenticationsRoute");
const getAdminRoute = require("./routes/users/getAdminRoute");
const postCourseRoute = require("./routes/courses/postCourseRoute");
const getAllCourseRoute = require("./routes/courses/getAllCouresRoute");
const getOneCourseRoute = require("./routes/courses/getOneCourseRoute");
const paymentSaveRoute = require("./routes/payments/paymentSaveRoute");
const createPaymentIntentRoute = require("./routes/payments/createPaymentIntentsRoute");
const updateUserRoute = require("./routes/users/updateUserRoute");
const getUserRoute = require("./routes/users/getUserRoute");



//middileare
applyMiddleware(app);

// authentication routes
app.use(jwtRoute);

// user related api routes
app.use(creatNewUserRoute);
app.use(getAdminRoute);
app.use(updateUserRoute);
app.use(getUserRoute);

// course related api routes
app.use(postCourseRoute);
app.use(getAllCourseRoute);
app.use(getOneCourseRoute);

// payments related api routes
app.use(paymentSaveRoute);
app.use(createPaymentIntentRoute);

app.get('/', (req, res) => {
    res.send('Online course server is running');
});


// handling all (get,post,update,delete.....) unhandled routes
app.all("*", (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`);
    error.status = 404;
    next(error);
});

// error handling middleware
app.use(globalErrorHandler);



module.exports = app;