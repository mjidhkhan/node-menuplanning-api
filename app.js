import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';








// api related 
import config from "./config/config";

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/stock", config.stock);
app.use("/mealtype", config.mealtype);
app.use("/coursetype", config.coursetype);
app.use("/user", config.user);
app.use("/starters", config.starter);
app.use("/maincourse", config.maincourse);
app.use("/recipe", config.recipe);
app.use("/orders", config.order);
app.use("/refreshments", config.refreshment);
app.use("/reviews", config.review);
app.use("/desserts", config.dessert);


// if we are here the specific request not found
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// all other requests are not implemented.

app.use((err, req, res, next) => {
    res.status(err.status || 501);
    res.json({
        error: {
            code: err.status || 501,
            message: err.message
        }
    });
});

module.exports = app;