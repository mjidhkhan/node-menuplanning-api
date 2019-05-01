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

}

export default MealType;