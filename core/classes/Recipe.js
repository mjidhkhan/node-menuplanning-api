class Recipe {
    /**
     * All Recipes
     */
    static getAllRecipesSQL() {
            let sql = `SELECT * FROM meal_course
                JOIN course_details
                ON meal_course.id = course_details.course_id
                WHERE meal_course.meal_type =2`;
            return sql;
        }
        /**
         *  Recipes ByID
         */
    static getAllRecipeByIDSQL(id) {
            let sql = `SELECT * FROM meal_course
                JOIN course_details
                ON meal_course.id = course_details.course_id
                WHERE meal_course.id =${id}`;
            return sql;
        }
        /**
         * All Veg Recipes
         */
    static getAllVegRecipeSQL() {
            let sql = `SELECT * FROM meal_course
        JOIN course_details
        ON meal_course.id = course_details.course_id
        WHERE meal_course.meal_type =2
        AND meal_course.course_type =1`;
            return sql;
        }
        /**
         * All Non-Veg Recipes
         */
    static getAllNonVegRecipeSQL() {
        let sql = `SELECT * FROM meal_course
    JOIN course_details
    ON meal_course.id = course_details.course_id
    WHERE meal_course.meal_type =2
    AND meal_course.course_type =2`;
        return sql;
    }



}

export default Recipe;