import express from "express";
import db from "../db/database";

import Review from '../core/classes/Review';
import action from '../core/utils/utils';

const router = express.Router();

/**
 * Get All Reviews
 */
router.get("/", (req, res, next) => {

    db.query(Orders.AllOrdersSQL(), (err, data) => {
        let msg = "Orders listed."
        action.All(err, data, res, msg);
    });

});
/**
 * Get Reviews ByID
 */
router.get("/:itemId", (req, res, next) => {
    let pid = req.params.itemId;

    db.query(Orders.OrderByIDSQL(pid), (err, data) => {
        var success = "Order found.";
        var fail = "Order Not found. with  ID: " + pid;
        action.ById(err, data, res, pid, success, fail);
    });
});
/**
 * Get Reviews ByDate
 */
router.get("/date/:date", (req, res, next) => {
    let pid = req.params.date;

    db.query(Orders.OrderByDateSQL(pid), (err, data) => {
        var success = "Order found.";
        var fail = "Order Not found. ";
        action.ById(err, data, res, pid, success, fail);
    });
});
/**
 * Get Reviews By Customer ID
 */
router.get("/customer/:id", (req, res, next) => {
    let pid = req.params.id;

    db.query(Orders.OrderByCustomerSQL(pid), (err, data) => {
        var success = "Order found.";
        var fail = "Order Not found. ";
        action.ById(err, data, res, pid, success, fail);
    });
});
/**
 * Get Reviews By Course ID
 */
router.get("/course/:id", (req, res, next) => {
    let pid = req.params.id;
    db.query(Orders.OrderByCustomerSQL(pid), (err, data) => {
        var success = "Order found.";
        var fail = "Order Not found. ";
        action.ById(err, data, res, pid, success, fail);
    });
});

module.exports = router;