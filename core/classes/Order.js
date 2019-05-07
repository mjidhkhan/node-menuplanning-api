class Orders {

    /**
     * All Main Courses
     */
    static AllOrdersSQL() {
            return this.allQuery()
        }
        /**
         * All Main Courses
         */
    static OrderByIDSQL() {
            var sql = this.AllOrdersSQL()
            sql += `WHERE orders.order.id = 2`;
            return sql;
        }
        /**
         * All Main Courses
         */
    static OrderByCustomerSQL() {
            let sql = `SELECT * FROM meal_course
                JOIN course_details
                ON meal_course.id = course_details.course_id
                WHERE meal_course.meal_type =2`;
            return sql;
        }
        /**
         * All Main Courses
         */
    static OrderByDateSQL() {
        let sql = `SELECT * FROM meal_course
                JOIN course_details
                ON meal_course.id = course_details.course_id
                WHERE meal_course.meal_type =2`;
        return sql;
    }


    static allQuery() {
        let sql = `SELECT 
            order_details.order_id,
            orders.customer_id,
            orders.order_date,
            orders.booking_date,
            users.fullname,
            users.email,
            order_details.course_name,
            meal_type.meal_type,
            course_type.course_type,
            order_details.servings
            FROM orders 
            JOIN order_details 
            ON orders.id = order_details.order_id
            JOIN users 
            ON users.id = orders.customer_id
            join meal_type
            on meal_type.id = order_details.meal_type
            JOIN course_type
            ON course_type.id =order_details.course_type`;
        return sql;
    }

}

export default Orders;