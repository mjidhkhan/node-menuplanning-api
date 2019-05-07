import express from "express";
import db from "../db/database";

import Order from '../core/classes/Order';
import action from '../core/utils/utils';

const router = express.Router();
/**
 * Get Desserts
 */
router.get("/", (req, res, next) => {

    db.query(Order.AllOrdersSQL(), (err, data) => {
        let msg = "Desserts listed."
        action.All(err, data, res, msg);
    });

});
module.exports = router;