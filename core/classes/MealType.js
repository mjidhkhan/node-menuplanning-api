class MealType {

    constructor(meal_type) {
        this.id = 0;
        this.type = meal_type
    }
    /**
     * Get All Meal Types
     */
    static getAllMealTypesSQL() {
        let sql = `SELECT * FROM meal_type`;
        return sql;
    }

    /**
     *  Delete Meal Type
     * @param {*} id 
     */
    static deleteMealTypesSQL(id) {
        let sql = `DELETE FROM meal_type WHERE id = ${id}`;
        return sql;
    }

    /**
     * Get Meal Type ByID
     * @param {*} id 
     */
    static getMealTypeByIdSQL(id) {
        let sql = `SELECT * FROM meal_type WHERE id =${id}`
        return sql;
    }

    /**
     * Add Meal Type
     */
    addMealTypeSQL() {
        let sql = `INSERT INTO meal_type (meal_type) VALUES('${this.type}')`;
        return sql;
    }

    /**
     * Update Meal Type
     */
    updateMealTypeSQL(id) {
        let sql = `UPDATE meal_type SET meal_type = '${this.type}' WHERE id =${id}`;
        return sql;
    }

}

export default MealType;