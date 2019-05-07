import express from "express";
import db from "../db/database";

import Starter from '../core/classes/Starter';
import action from '../core/utils/utils';

const router = express.Router();

/**
 * Get Starters
 */
router.get("/", (req, res, next) => {
    var type = req.query.name
    if (type === 'nveg') { // Non-Vegetarian Starters list
        db.query(Starter.getNonVegStartersSQL(), (err, data) => {
            let msg = "Non-Vegetarian Starters listed."
            action.All(err, data, res, msg);
        });
    } else if (type === 'veg') { // Vegetarian Starters list
        db.query(Starter.getVegStartersSQL(), (err, data) => {
            let msg = " Vegetarian Starters listed."
            action.All(err, data, res, msg);
        });
    } else { // All Starters list
        db.query(Starter.getAllStartersSQL(), (err, data) => {
            let msg = "Starters listed."
            action.All(err, data, res, msg);
        });
    }
});


/**
 * Get Starter ByID
 */
router.get("/:itemId", (req, res, next) => {
    let pid = req.params.itemId;
    db.query(Starter.getStarterByIdSQL(pid), (err, data) => {
        var success = "Starters found.";
        var fail = "Starters Not found.";
        action.ById(err, data, res, pid, success, fail);
    });
});

module.exports = router;