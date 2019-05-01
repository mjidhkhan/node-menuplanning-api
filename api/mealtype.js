import express from "express";
import db from "../db/database";

import MealType from '../core/classes/MealType';

const router = express.Router();

/**
 * Get All Meal Types
 */
router.get("/", (req, res, next) => {
    db.query(MealType.getAllMealTypesSQL(), (err, data) => {
        processAllMealTypes(err, res, data);
    });
});

/**
 * Get Meal Type ByID
 */
router.get("/:id", (req, res, next) => {
    let mid = req.params.id;
    db.query(MealType.getMealTypeByIdSQL(mid), (err, data) => {
        processMealTypeById(err, res, data, mid);
    });
});

/**
 * Add Meal Type
 */
router.post("/add", (req, res, next) => {
    //read Item information from request
    let mealtype = new MealType(req.body.meal_type);
    db.query(mealtype.addMealTypeSQL(), (err, data) => {
         processAdd(err, data, res);
    });
});

/**
 * Update Meal Type
 */
router.put("/update", (req, res, next) => {
    var mid = req.body.id;
    let mealtype = new MealType(req.body.meal_type);
    db.query(mealtype.updateMealTypeSQL(mid), (err, data) => {
        processUpdate(err, data, res, mid);
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


/** ********************** PROCESS ROUTES START ************************ */

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

/**
 * Process Update and send Response
 * @param {*} err 
 * @param {*} data 
 * @param {*} res 
 * @param {*} mid 
 */
function processUpdate(err, data, res, mid) {
    if (!err) {
        if (data && data.affectedRows > 0) {
            res.status(200).json({
                message: `Meal Type Updated.`,
                affectedRows: data.affectedRows
            });
        } else {
            res.status(200).json({
                message: `Meal Type Not found with id = ${mid}. ${err}`
            });
        }
    } else {
        res.status(200).json({
            message: `${err}`
        });
    }
}

/**
 * Process Add and send Response
 * @param {*} err 
 * @param {*} res 
 * @param {*} data 
 */
function processAdd(err, data, res) {
    console.log(res)
    if (!err) {
        res.status(200).json({
            message: "Meal Type  added.",
            productId: data.insertId
        });
    } else {
        res.status(200).json({
            message: err
        });
    }
}

/**
 * Process Get Meal Type ByID and send Response
 * @param {*} err 
 * @param {*} res 
 * @param {*} data 
 * @param {*} mid 
 */
function processMealTypeById(err, res, data, mid) {
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
}

/**
 * Process All Meal Types and send Response
 * @param {*} err 
 * @param {*} res 
 * @param {*} data 
 */
function processAllMealTypes(err, res, data) {
    if (!err) {
        res.status(200).json({
            message: "Meal Types  listed.",
            mealTypes: data
        });
    } else {
        return err
    }
}

/** ********************** PROCESS ROUTES ENDS ************************ */
