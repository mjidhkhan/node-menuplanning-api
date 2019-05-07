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

module.exports = { MealType, CourseType };