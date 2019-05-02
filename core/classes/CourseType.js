class CourseType {

    constructor(course_type) {
        this.id = 0;
        this.type = course_type
    }
    /**
     * Get All Course Types
     */
    static getAllCourseTypesSQL() {
        let sql = `SELECT * FROM course_type`;
        return sql;
    }

    /**
     *  Delete Course Type
     * @param {*} id 
     */
    static deleteCourseTypesSQL(id) {
        let sql = `DELETE FROM course_type WHERE id = ${id}`;
        return sql;
    }

    /**
     * Get Course Type ByID
     * @param {*} id 
     */
    static getCourseTypeByIdSQL(id) {
        let sql = `SELECT * FROM course_type WHERE id =${id}`
        return sql;
    }

    /**
     * Add Course Type
     */
    addCourseTypeSQL() {
        let sql = `INSERT INTO course_type (course_type) VALUES('${this.type}')`;
        return sql;
    }

    /**
     * Update Course Type
     */
    updateCourseTypeSQL(id) {
        let sql = `UPDATE course_type SET course_type = '${this.type}' WHERE id =${id}`;
        return sql;
    }

}


export default CourseType;