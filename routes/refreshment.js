import express from "express";
import db from "../db/database";

import Refreshment from '../core/classes/Refreshment';
import action from '../core/utils/utils';

const router = express.Router();

/**
 * Get Refreshments
 */
router.get("/", (req, res, next) => {

    db.query(Refreshment.getAllRefreshmentSQL(), (err, data) => {
        let msg = "Desserts listed."
        action.All(err, data, res, msg);
    });

});


/**
 * Get Refreshment ByID
 */
router.get("/:itemId", (req, res, next) => {
    let pid = req.params.itemId;
    console.log(pid)
    db.query(Refreshment.getRefreshmentByIdSQL(pid), (err, data) => {
        var success = "Starters found.";
        var fail = "Starters Not found.";
        action.ById(err, data, res, pid, success, fail);
    });
});
module.exports = router;