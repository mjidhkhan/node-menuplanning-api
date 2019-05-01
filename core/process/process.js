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
 * @param {*} successMsg
 * @param {*} failureMsg
 */
function ById(err, data, res, pid, successMsg, failureMsg) {
    if (!err) {
        if (data && data.length > 0) {
            res.status(200).json({
                message: successMsg,
                product: data
            });
        } else {
            res.status(200).json({
                message: failureMsg
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
 * @param {*} successMsg
 * @param {*} failureMsg
 */
function Update(err, data, res, pid, successMsg, failureMsg) {
    if (!err) {
        if (data && data.affectedRows > 0) {
            res.status(200).json({
                message: successMsg,
                affectedRows: data.affectedRows
            });
        } else {
            res.status(200).json({
                message: `${failureMsg} ${pid}. ${err}`
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
 * @param {*} successMsg
 * @param {*} failureMsg
 */
function Delete(err, data, res, pid, successMsg, failureMsg) {
    if (!err) {
        if (data && data.affectedRows > 0) {
            res.status(200).json({
                message: `${successMsg} ${pid}.`,
                affectedRows: data.affectedRows
            });
        } else {
            res.status(200).json({
                message: failureMsg
            });
        }
    } else {
        res.status(200).json({ message: err });
    }
}

module.exports= {All, ById, Add, Update, Delete};