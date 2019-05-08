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
        let msg = "Refreshment listed."
        action.All(err, data, res, msg);
    });

});


/**
 * Get Refreshment ByID
 */
router.get("/:itemId", (req, res, next) => {
    let pid = req.params.itemId;

    db.query(Refreshment.getRefreshmentByIdSQL(pid), (err, data) => {
        if (pid === 'all' || pid === 'All' || pid === 'ALL') {
            var success = "Refreshment Items found.";
        } else {
            var success = "Refreshment Item found.";
        }

        var fail = "Refreshment Item Not found.";
        action.ById(err, data, res, pid, success, fail);
    });
});
module.exports = router;