import express from "express";
import db from "../db/database";

import MealType from '../core/classes/MealType';

const router = express.Router();

/**
 * Get All Meal Types
 */
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

router.get("/:id", (req, res, next) => {
    let mid = req.params.id;
    db.query(MealType.getMealTypeByIdSQL(mid), (err, data) => {
        if (!err) {
            if (data && data.length > 0) {
                res.status(200).json({
                    message: "Meal Type  found.",
                    product: data
                });
            } else {
                res.status(200).json({
                    message: "Meal Type Not found."
                });
            }
        }
    });
});

/**
 * Delete Meal Type
 */
router.post("/delete", (req, res, next) => {
    var mid = req.body.id;
    db.query(MealType.deleteMealTypesSQL(mid), (err, data) => {
        processDelete(err, data, res, mid);
    })
});

module.exports = router;

/**
 * Process Delete and send Response
 * @param {*} err 
 * @param {*} data 
 * @param {*} res 
 * @param {*} mid 
 */
function processDelete(err, data, res, mid) {
    if (!err) {
        if (data && data.affectedRows > 0) {
            res.status(200).json({
                message: `Meal Type  deleted with id = ${mid}.`,
                affectedRows: data.affectedRows
            });
        }
        else {
            res.status(200).json({
                message: "Meal Type Not Found"
            });
        }
    }
}
