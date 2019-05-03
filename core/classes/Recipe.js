class Recipe {
    constructor(c_type, m_type) {
            this.meal_type = m_type;
            this.course_type = c_type
        }
        /**
         * All Recipes
         */
    static getAllRecipesSQL() {
            let sql = `SELECT * 
            FROM meal_course
            JOIN course_details
            ON course_details.course_id = meal_course.id
            JOIN recipes
            ON meal_course.id = recipes.course_id
            JOIN stock
            ON stock.id = recipes.item_id
            JOIN course_type
            ON meal_course.course_type = course_type.id
            JOIN meal_type
            ON meal_course.meal_type = meal_type.id`;
            return sql;
        }
        /**
         *  Recipes ByID
         */
    static getRecipeByIDSQL(id) {
            let sql = `SELECT * 
            FROM meal_course
            JOIN course_details
            ON course_details.course_id = meal_course.id
            JOIN recipes
            ON meal_course.id = recipes.course_id
            JOIN stock
            ON stock.id = recipes.item_id
            JOIN course_type
            ON meal_course.course_type = course_type.id
            JOIN meal_type
            ON meal_course.meal_type = meal_type.id
            WHERE course_details.course_id =${id}`;
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

    getRecipeByType() {
        console.log(this.course_type + ':' + this.meal_type)
        let sql = `SELECT * 
        FROM meal_course
        JOIN course_details
        ON course_details.course_id = meal_course.id
        JOIN recipes
        ON meal_course.id = recipes.course_id
        JOIN stock
        ON stock.id = recipes.item_id
        JOIN course_type
        ON meal_course.course_type = course_type.id
        JOIN meal_type
        ON meal_course.meal_type = meal_type.id
        WHERE meal_course.course_type=${this.course_type} 
        AND meal_course.meal_type=${this.meal_type}`;
        return sql;
    }


}

export default Recipe;