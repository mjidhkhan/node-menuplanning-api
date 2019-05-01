import express from "express";
import db from "../db/database";

import MealType from '../core/classes/MealType';

const router = express.Router();


router.get("/", (req, res, next) => {

    db.query(MealType.getAllMealTypesSQL(), (err, data) => {
        if (!err) {
            res.status(200).json({
                message: "Meal Types  listed.",
                mealTypes: data
            });
        } else {
            return err
        }
    });
});

module.exports = router;