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
router.get("/:typeId", (req, res, next) => {
    let cid = req.params.typeId;
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
    let coursetype = new CourseType(req.body.course_type);
    db.query(coursetype.addCourseTypeSQL(), (err, data) => {
        var success = "Course Type  added.";
        action.Add(err, data, res, success);
    });
});

/**
 * Update Course Type
 */
router.put("/update", (req, res, next) => {
    var cid = req.body.typeId;
    let coursetype = new CourseType(req.body.course_type);
    db.query(coursetype.updateCourseTypeSQL(cid), (err, data) => {
        var success = `Course Type Updated.`;
        var fail = `Course Type Not found with id = `;
        action.Update(err, data, res, cid, success, fail);
    });
});

/**
 * Delete Course Type
 */
router.delete("/delete", (req, res, next) => {
    var cid = req.body.typeId;
    db.query(CourseType.deleteCourseTypesSQL(cid), (err, data) => {
        var success = `Course Type  deleted with id =  `;
        var fail = "Course Type Not Found";
        action.Delete(err, data, res, cid, success, fail);
    })
});


module.exports = router;