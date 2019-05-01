/**
 * Get All Stock and send Response
 * @param {*} err 
 * @param {*} data 
 * @param {*} res 
 * @param {*} msg 
 */
function All(err, data, res, msg) {
    if (!err) {
        res.status(200).json({
            message: msg,
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
 * @param {*} success
 * @param {*} fail
 */
function ById(err, data, res, pid, success, fail) {
    if (!err) {
        if (data && data.length > 0) {
            res.status(200).json({
                message: success,
                product: data
            });
        } else {
            res.status(200).json({
                message: fail
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
 * @param {*} msg 
 */
function Add(err, data, res, msg) {
    if (!err) {
        res.status(200).json({
            message: msg,
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
 * @param {*} success
 * @param {*} fail
 */
function Update(err, data, res, pid, success, fail) {
    if (!err) {
        if (data && data.affectedRows > 0) {
            res.status(200).json({
                message: success,
                affectedRows: data.affectedRows
            });
        } else {
            res.status(200).json({
                message: `${fail} ${pid}. ${err}`
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
 * @param {*} success
 * @param {*} fail
 */
function Delete(err, data, res, pid, success, fail) {
    if (!err) {
        if (data && data.affectedRows > 0) {
            res.status(200).json({
                message: `${success} ${pid}.`,
                affectedRows: data.affectedRows
            });
        } else {
            res.status(200).json({
                message: fail
            });
        }
    } else {
        res.status(200).json({ message: err });
    }
}

module.exports= {All, ById, Add, Update, Delete};