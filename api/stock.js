import express from "express";
import db from "../db/database";

import Stock from '../core/classes/Stock';
import action from '../core/process/process';

const router = express.Router();

router.get("/", (req, res, next) => {
    db.query(Stock.getAllStockItemsSQL(), (err, data) => {
        let msg = "Stock Items listed."
        action.All(err, data, res, msg);
    });
});

router.get("/:itemId", (req, res, next) => {
    let pid = req.params.itemId;
    db.query(Stock.getStockItemByIdSQL(pid), (err, data) => {
        var success = "Stock Item found.";
        var fail = "Stock Item Not found.";
        action.ById(err, data, res, pid, success, fail);
    });
});

/**
 * Add Stock Item
 */
router.post("/add", (req, res, next) => {

    //read Item information from request
    let stock = new Stock(req.body.item_name,
        req.body.item_quantity,
        req.body.item_reorder_level,
        req.body.item_measure_unit);
    db.query(stock.addStockItemSQL(), (err, data) => {
        var msg = "Item added to Stock.";
        action.Add(err, data, res, msg);
    });
});

/**
 * Update Stock Item
 */
router.put("/update", (req, res, next) => {
    var pid = req.body.itemId;
    let stock = new Stock(req.body.item_name,
        req.body.item_quantity,
        req.body.item_reorder_level,
        req.body.item_unit_type);
    db.query(stock.updateStockItemSQL(pid), (err, data) => {
        var success = `Stock Item Updated.`;
        var fail = `Stock Item Not found with id = `;
        action.Update(err, data, res, pid, success, fail);
    });
});

router.post("/delete", (req, res, next) => {
    var pid = req.body.itemId;
    db.query(Stock.deleteStockItemByIdSQL(pid), (err, data) => {
        var success = `Stock Item deleted with id = `;
        var fail = "Stock Item Not found.";
        action.Delete(err, data, res, pid, success, fail);
    });
});

module.exports = router;
