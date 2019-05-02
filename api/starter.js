import express from "express";
import db from "../db/database";

import Starter from '../core/classes/Starter';
import action from '../core/process/process';

const router = express.Router();

/**
 * Get All Starters
 */
router.get("/", (req, res, next) => {
    db.query(Starter.getAllStartersSQL(), (err, data) => {
        let msg = "Starters listed."
        action.All(err, data, res, msg);
    });
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