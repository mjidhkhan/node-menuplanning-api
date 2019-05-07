/**
 * Get All  and send Response
 * @param {*} err 
 * @param {*} data 
 * @param {*} res 
 * @param {*} msg 
 */
function All(err, data, res, msg) {
    if (!err) {
        res.status(200).json({
            message: msg,
            list: data
        });
    } else {
        res.status(200).json({ message: err });
    }
}

/**
 * Get   ByID and send Response
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
                data: data
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
 * Add  and send Response
 * @param {*} err 
 * @param {*} data 
 * @param {*} res 
 * @param {*} msg 
 */
function Add(err, data, res, msg) {
    if (!err) {
        res.status(200).json({
            message: msg,
            Id: data.insertId
        });
    } else {
        res.status(200).json({ message: err });
    }
}

/**
 * Update  and send Response
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
 * Delete  and send Response
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
                message: `${success} ${pid}`,
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

/**
 *  Autility function to hash password
 * @param {*} input 
 */

function hashPass(input) {
    var crypto = require('crypto')
    var hash = crypto.createHash('sha1');
    hash.update(input);
    return hash.digest('hex');
}

/***************************  ADDITIONAL  ***********************************/
/**
 * 
 * @param {*} course_type 
 */
var CourseType = function(course_type) {
    let course;
    if (course_type === 'starter') {
        course = 1;
    } else if (course_type === 'maincourse') {
        course = 2;
    } else if (course_type === 'dessert' || course_type === 'sweet' || course_type === 'sweets') {
        course = 3;
    } else if (course_type === 'breakfast') {
        course = 4;
    } else if (course_type === 'refresh' || course_type === 'drink' || course_type === 'drinks') {
        course = 5;
    }
    return course;
}

/**
 * 
 * @param {*} meal_type 
 */
var MealType = function(meal_type) {
    let meal;
    if (meal_type == 'veg') {
        meal = 1;
    } else if (meal_type == 'nveg') {
        meal = 2;
    } else if (meal_type == 'dessert' || meal_type == 'sweet') {
        meal = 3;
    } else if (meal_type == 'refresh' || meal_type == 'drink' || meal_type == 'drinks') {
        meal = 4;
    }
    return meal;
}

/****************************************************************************/

module.exports = { All, ById, Add, Update, Delete, hashPass, MealType, CourseType };