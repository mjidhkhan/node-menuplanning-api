import express from "express";
import db from "../db/database";

import Reviews from '../core/classes/Review';
import action from '../core/utils/utils';

const router = express.Router();

/**
 * Get All Reviews
 */
router.get("/", (req, res, next) => {

    db.query(Reviews.AllReviewsSQL(), (err, data) => {
        let msg = "Orders listed."
        action.All(err, data, res, msg);
    });

});
/**
 * Get Reviews ByID
 */
router.get("/:reviewId", (req, res, next) => {
    let pid = req.params.reviewId;

    db.query(Reviews.ReviewByIDSQL(pid), (err, data) => {
        var success = "Review found.";
        var fail = "Review Not found. with  ID: " + pid;
        action.ById(err, data, res, pid, success, fail);
    });
});
/**
 * Get Reviews ByDate
 */
router.get("/date/:date", (req, res, next) => {
    let pid = req.params.date;

    db.query(Reviews.ReviewByDateSQL(pid), (err, data) => {
        var success = "Review found.";
        var fail = "Review Not found. ";
        action.ById(err, data, res, pid, success, fail);
    });
});
/**
 * Get Reviews By Customer ID
 */
router.get("/customer/:customerId", (req, res, next) => {
    let pid = req.params.customerId;

    db.query(Reviews.ReviewByCustomerSQL(pid), (err, data) => {
        var success = "Review found.";
        var fail = "Review Not found. ";
        action.ById(err, data, res, pid, success, fail);
    });
});
/**
 * Get Reviews By Course ID
 */
router.get("/course/:courseId", (req, res, next) => {
    let pid = req.params.courseId;
    db.query(Reviews.ReviewByCourseIDSQL(pid), (err, data) => {
        var success = "Review found.";
        var fail = "Review Not found. ";
        action.ById(err, data, res, pid, success, fail);
    });
});

module.exports = router;