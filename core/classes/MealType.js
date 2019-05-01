class MealType {

    construct(meal_type) {
        this.id = 0;
        this.meal_type = meal_type
    }
    /**
     * Get All Stock Items
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
    addMealType() {
        let sql = `INSERT INTO meam_type (meal_type) VALUES('${this.meal_type}')`;
        return sql;
    }

    /**
     * Update Meal Type
     */
    updateMealType() {
        let sql = `UPDATE meal_type SET meal_type = '${this.meal_type}'`;
        return sql;
    }

}

export default MealType;