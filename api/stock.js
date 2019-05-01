import express from "express";
import db from "../db/database";

import Stock from '../core/classes/Stock';

const router = express.Router();

router.get("/", (req, res, next) => {
    db.query(Stock.getAllStockItemsSQL(), (err, data) => {
        processGetAllStock(err, data, res);
    });
});

router.get("/:itemId", (req, res, next) => {
    let pid = req.params.itemId;
    db.query(Stock.getStockItemByIdSQL(pid), (err, data) => {
        processGetStockById(err, data, res, pid);
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
        processAddStock(err, data, res);
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
        processUpdateStock(err, data, res, pid);
    });
});

router.post("/delete", (req, res, next) => {
    var pid = req.body.itemId;
    db.query(Stock.deleteStockItemByIdSQL(pid), (err, data) => {
        processDeleteStock(err, data, res, pid);
    });
});

module.exports = router;


/** ********************** PROCESS ROUTES START ************************ */

/**
 * Get All Stock and send Response
 * @param {*} err 
 * @param {*} data 
 * @param {*} res 
 */
function processGetAllStock(err, data, res) {
    if (!err) {
        res.status(200).json({
            message: "Stock Items listed.",
            productId: data
        });
    } else {
        res.status(200).json({ message: err });
    }
}

/**
 * Get  Stock ByID and send Response
 * @param {*} err 
 * @param {*} data 
 * @param {*} res 
 * @param {*} pid 
 */
function processGetStockById(err, data, res, pid) {
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
    } else {
        res.status(200).json({ message: err });
    }
}

/**
 * Add Stock and send Response
 * @param {*} err 
 * @param {*} data 
 * @param {*} res 
 */
function processAddStock(err, data, res) {
    if (!err) {
        res.status(200).json({
            message: "Item added to Stock.",
            productId: data.insertId
        });
    } else {
        res.status(200).json({ message: err });
    }
}

/**
 * Update Stock and send Response
 * @param {*} err 
 * @param {*} data 
 * @param {*} res 
 * @param {*} pid 
 */
function processUpdateStock(err, data, res, pid) {
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
        res.status(200).json({ message: err });
    }
}

/**
 * Delete Stock and send Response
 * @param {*} err 
 * @param {*} data 
 * @param {*} res 
 * @param {*} pid 
 */
function processDeleteStock(err, data, res, pid) {
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
    } else {
        res.status(200).json({ message: err });
    }
}
/** ********************** PROCESS ROUTES ENDS ************************ */