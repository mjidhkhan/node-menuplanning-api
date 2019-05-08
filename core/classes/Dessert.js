class Dessert {
    /**
     * Get All Desserts
     */
    static getAllDessertsSQL() {
        return this.menuQuery();
    }

    /**
     * Get Dessert ByID
     * @param {*} id 
     */
    static getDessertByIdSQL(id) {
        var sql = ''
        if (id === 'all' || id === 'All') {
            sql = this.menuQuery();
        } else {
            sql = this.menuQuery();
            sql += ` AND meal_course.id = ${id}`;
        }

        return sql;
    }

    /**
     * Base Query  for Desserts
     */
    static menuQuery() {
        let sql = `SELECT course_details.course_id, course_details.course_name, 
        course_details.course_prep_date,
        course_details.course_prep_time,
        course_details.course_notes,
        course_details.course_instructions,
        course_details.course_image,
        meal_type.meal_type,
        course_type.course_type
        FROM course_details 
        INNER JOIN meal_course
        ON meal_course.id =course_details.course_id
        INNER JOIN course_type
        ON course_type.id = meal_course.course_type
        INNER JOIN meal_type
        ON meal_type.id = meal_course.meal_type
        Where meal_course.course_type = 3`;
        return sql;
    }

}

export default Dessert;