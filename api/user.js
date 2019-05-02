import express from "express";
import db from "../db/database";

import User from '../core/classes/User';
import action from '../core/process/process';

const router = express.Router();


/**
 * Get All Users
 */
router.get("/", (req, res, next) => {
    db.query(User.getAllUsersSQL(), (err, data) => {
        var success = "Users  listed.";
        action.All(err, data, res, success);
    });
});

/**
 * Get User ByID
 */
router.get("/:userId", (req, res, next) => {
    let uid = req.params.userId;
    db.query(User.getUserByIdSQL(uid), (err, data) => {
        var success = "User found.";
        var fail = "User Not found.";
        action.ById(err, data, res, uid, success, fail);
    });
});

/**
 * Add User
 */
router.post("/add", (req, res, next) => {
    //read Item information from request
    var pass = req.body.user_pass;
    var hashed_pass = action.hashPass(pass)
    let user = new User(req.body.full_name,
        req.body.user_name,
        req.body.user_email,
        hashed_pass,
        req.body.user_status);
    db.query(user.addUserSQL(), (err, data) => {
        var success = "User added.";
        action.Add(err, data, res, success);
    });
});


module.exports = router;