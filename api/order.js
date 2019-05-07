import express from "express";
import db from "../db/database";

import Orders from '../core/classes/Order';
import action from '../core/utils/utils';

const router = express.Router();
/**
 * Get All Orders
 */
router.get("/", (req, res, next) => {

    db.query(Orders.AllOrdersSQL(), (err, data) => {
        let msg = "Orders listed."
        action.All(err, data, res, msg);
    });

});
/**
 * Get Orders ByID
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
 * Get Orders ByID
 */
router.get("/date/:date", (req, res, next) => {
    let pid = req.params.date;

    db.query(Orders.OrderByDateSQL(pid), (err, data) => {
        var success = "Order found.";
        var fail = "Order Not found. ";
        action.ById(err, data, res, pid, success, fail);
    });
});
module.exports = router;