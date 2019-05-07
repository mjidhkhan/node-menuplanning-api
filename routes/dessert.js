import express from "express";
import db from "../db/database";

import User from '../core/classes/User';
import Desserts from '../core/classes/Dessert';
import action from '../core/utils/utils';

const router = express.Router();

/**
 * Get Desserts
 */
router.get("/", (req, res, next) => {

    db.query(Desserts.getAllDessertsSQL(), (err, data) => {
        let msg = "Desserts listed."
        action.All(err, data, res, msg);
    });

});


/**
 * Get Starter ByID
 */
router.get("/:itemId", (req, res, next) => {
    let pid = req.params.itemId;
    console.log(pid)
    db.query(Desserts.getDessertByIdSQL(pid), (err, data) => {
        var success = "Starters found.";
        var fail = "Starters Not found.";
        action.ById(err, data, res, pid, success, fail);
    });
});

module.exports = router;