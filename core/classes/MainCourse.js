class MainCourse {
    /**
     * All Main Courses
     */
    static getAllMainCoursesSQL() {
            let sql = `SELECT * FROM meal_course
                    JOIN course_details
                    ON meal_course.id = course_details.course_id
                    WHERE meal_course.meal_type =2`;
            return sql;
        }
        /**
         *  Main Courses ByID
         */
    static getAllMainCourseByIDSQL(id) {
            let sql = `SELECT * FROM meal_course
                    JOIN course_details
                    ON meal_course.id = course_details.course_id
                    WHERE meal_course.id =${id}`;
            return sql;
        }
        /**
         * All Veg Main Courses
         */
    static getAllVegMainCoursesSQL() {
            let sql = `SELECT * FROM meal_course
            JOIN course_details
            ON meal_course.id = course_details.course_id
            WHERE meal_course.meal_type =2
            AND meal_course.course_type =1`;
            return sql;
        }
        /**
         * All Non-Veg Main Courses
         */
    static getAllNonVegMainCoursesSQL() {
        let sql = `SELECT * FROM meal_course
        JOIN course_details
        ON meal_course.id = course_details.course_id
        WHERE meal_course.meal_type =2
        AND meal_course.course_type =2`;
        return sql;
    }



}

export default MainCourse;