import express from "express";
import db from "../db/database";

import Recipe from '../core/classes/Recipe';
import action from '../core/process/process';


const router = express.Router();
router.get('/', (req, res, next) => {

    var course_type = req.query.name;
    var meal_type = req.query.val;

    var course = getCourseType(course_type);
    var meal = getMealType(meal_type);

    if (typeof course !== 'undefined' && typeof meal !== 'undefined') {
        var recipe = new Recipe(course, meal);
        db.query(recipe.getRecipeByType(), (err, data) => {
            let msg = "Recipes  Listed."
            action.All(err, data, res, msg);
        });
    } else {
        db.query(Recipe.getAllRecipesSQL(), (err, data) => {
            let msg = "Recipes  Listed."
            action.All(err, data, res, msg);
        });
    }

});
router.get('/:itemId', (req, res, next) => {
    let pid = req.params.itemId;
    db.query(Recipe.getRecipeByIDSQL(pid), (err, data) => {
        var success = "Recipe  found.";
        var fail = "Recipe  Not found.";
        action.ById(err, data, res, pid, success, fail);
    });
});


module.exports = router;

function getCourseType(course_type) {
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

function getMealType(meal_type) {
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