import express from "express";
import db from "../db/database";

import Recipe from '../core/classes/Recipe';
import action from '../core/process/process';

const router = express.Router();
router.get('/', (req, res, next) => {
    db.query(Recipe.getAllRecipesSQL(), (err, data) => {
        let msg = "Recipes  Listed."
        action.All(err, data, res, msg);
    });
});
router.get('/:itemId', (req, res, next) => {
    let pid = req.params.itemId;
    db.query(Recipe.getRecipeByIDSQL(pid), (err, data) => {
        var success = "Recipe  found.";
        var fail = "Recipe  Not found.";
        action.ById(err, data, res, pid, success, fail);
    });
})
module.exports = router;