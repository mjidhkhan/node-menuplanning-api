import express from "express";
import db from "../db/database";

import Stock from '../core/classes/stock';

const router = express.Router();

router.get("/", (req, res, next) => {

    db.query(Stock.getAllStockItemsSQL(), (err, data) => {
        if (!err) {
            res.status(200).json({
                message: "Stock Items listed.",
                productId: data
            });
        } else {
            return err
        }
    });
});

router.get("/:itemId", (req, res, next) => {
    let pid = req.params.itemId;
    db.query(Stock.getStockItemByIdSQL(pid), (err, data) => {
        if (!err) {
            if (data && data.length > 0) {
                res.status(200).json({
                    message: "Stock Item found.",
                    product: data
                });
            } else {
                res.status(200).json({
                    message: "Stock Item Not found."
                });
            }
        }
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
        if (!err) {
            res.status(200).json({
                message: "Item added to Stock.",
                productId: data.insertId
            });
        } else {
            console.log(err)
        }
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

        if (!err) {
            if (data && data.affectedRows > 0) {
                res.status(200).json({
                    message: `Stock Item Updated.`,
                    affectedRows: data.affectedRows
                });
            } else {
                res.status(200).json({
                    message: `Stock Item Not found with id = ${pid}. ${err}`
                });
            }
        } else {
            console.log(err)
        }
    });
});

router.post("/delete", (req, res, next) => {
    var pid = req.body.itemId;
    console.log(pid)
    db.query(Stock.deleteStockItemByIdSQL(pid), (err, data) => {
        if (!err) {
            if (data && data.affectedRows > 0) {
                res.status(200).json({
                    message: `Stock Item deleted with id = ${pid}.`,
                    affectedRows: data.affectedRows
                });
            } else {
                res.status(200).json({
                    message: "Stock Item Not found."
                });
            }
        }
    });
});

module.exports = router;