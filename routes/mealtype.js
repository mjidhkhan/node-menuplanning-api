import express from "express";
import db from "../db/database";

import MealType from '../core/classes/MealType';
import action from '../core/utils/utils';

const router = express.Router();

/**
 * Get All Meal Types
 */
router.get("/", (req, res, next) => {
    db.query(MealType.getAllMealTypesSQL(), (err, data) => {
        var success = "Meal Types  listed.";
        action.All(err, data, res, success);
    });
});

/**
 * Get Meal Type ByID
 */
router.get("/:typeId", (req, res, next) => {
    let mid = req.params.typeId;
    db.query(MealType.getMealTypeByIdSQL(mid), (err, data) => {
        var success = "Meal Type  found.";
        var fail = "Meal Type Not found.";
        action.ById(err, data, res, mid, success, fail);
    });
});

/**
 * Add Meal Type
 */
router.post("/add", (req, res, next) => {
    //read Item information from request
    let mealtype = new MealType(req.body.meal_type);
    db.query(mealtype.addMealTypeSQL(), (err, data) => {
        var success = "Meal Type  added.";
        action.Add(err, data, res, success);
    });
});

/**
 * Update Meal Type
 */
router.put("/update", (req, res, next) => {
    var mid = req.body.typeId;
    let mealtype = new MealType(req.body.meal_type);
    db.query(mealtype.updateMealTypeSQL(mid), (err, data) => {
        var success = `Meal Type Updated.`;
        var fail = `Meal Type Not found with id = `;
        action.Update(err, data, res, mid, success, fail);
    });
});

/**
 * Delete Meal Type
 */
router.post("/delete", (req, res, next) => {
    var mid = req.body.typeId;
    db.query(MealType.deleteMealTypesSQL(mid), (err, data) => {
        var success = `Meal Type  deleted with id =  `;
        var fail = "Meal Type Not Found";
        action.Delete(err, data, res, mid, success, fail);
    })
});

module.exports = router;