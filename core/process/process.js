/** ********************** PROCESS ROUTES START ************************ */

/**
 * Get All Stock and send Response
 * @param {*} err 
 * @param {*} data 
 * @param {*} res 
 */
function All(err, data, res) {
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
function ById(err, data, res, pid) {
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
function Add(err, data, res) {
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
function Update(err, data, res, pid) {
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
function Delete(err, data, res, pid) {
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

module.exports= Process;
/** ********************** PROCESS ROUTES ENDS ************************ */