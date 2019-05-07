import express from "express";
import db from "../db/database";

import MainCourse from '../core/classes/MainCourse';
import action from '../core/utils/utils';


const router = express.Router();

/**
 * Get All Main Courses
 */
router.get("/", (req, res, next) => {
    var type = req.query.name
    if (type === 'nveg') { // Non-Vegetarian MainCourses list
        db.query(MainCourse.getAllNonVegMainCoursesSQL(), (err, data) => {
            let msg = "Non-Vegetarian Main Courses  listed."
            action.All(err, data, res, msg);
        });
    } else if (type === 'veg') { // Vegetarian Main Courses list
        db.query(MainCourse.getAllVegMainCoursesSQL(), (err, data) => {
            let msg = " Vegetarian Main Courses  listed."
            action.All(err, data, res, msg);
        });
    } else { // All Main Courses
        db.query(MainCourse.getAllMainCoursesSQL(), (err, data) => {
            var success = "Main Courses   listed.";
            action.All(err, data, res, success);
        });
    }
});
/**
 * Get Main Courses ByID
 */
router.get("/:itemId", (req, res, next) => {
    let pid = req.params.itemId;
    db.query(MainCourse.getAllMainCourseByIDSQL(pid), (err, data) => {
        var success = "Main Course found.";
        var fail = "Main Course  Not found.";
        action.ById(err, data, res, pid, success, fail);
    });
});

module.exports = router;