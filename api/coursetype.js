import express from "express";
import db from "../db/database";

import CourseType from '../core/classes/CourseType';
import action from '../core/process/process';

const router = express.Router();

/**
 * Get All Course Types
 */
router.get("/", (req, res, next) => {
    db.query(CourseType.getAllCourseTypesSQL(), (err, data) => {
        var success = "Course Types  listed.";
        action.All(err, data, res, success);
    });
});

/**
 * Get Course Type ByID
 */
router.get("/:id", (req, res, next) => {
    let cid = req.params.id;
    db.query(CourseType.getCourseTypeByIdSQL(cid), (err, data) => {
        var success = "Course Type  found.";
        var fail = "Course Type Not found.";
        action.ById(err, data, res, cid, success, fail);
    });
});

/**
 * Add Course Type
 */
router.post("/add", (req, res, next) => {
    //read Item information from request
    let coursetype = new CourseType(req.body.meal_type);
    db.query(coursetype.addCourseTypeSQL(), (err, data) => {
        var success = "Course Type  added.";
        action.Add(err, data, res, success);
    });
});

/**
 * Update Course Type
 */
router.put("/update", (req, res, next) => {
    var cid = req.body.id;
    let coursetype = new CourseType(req.body.meal_type);
    db.query(coursetype.updateCourseTypeSQL(mid), (err, data) => {
        var success = `Course Type Updated.`;
        var fail = `Course Type Not found with id = ${cid}. ${err}`;
        action.Update(err, data, res, cid, success, fail);
    });
});

/**
 * Delete Course Type
 */
router.post("/delete", (req, res, next) => {
    var cid = req.body.id;
    db.query(MealType.deleteCourseTypesSQL(mid), (err, data) => {
        var success = `Course Type  deleted with id = ${cid}.`;
        var fail = "Course Type Not Found";
        action.Delete(err, data, res, cid, success, fail);
    })
});


module.exports = router;