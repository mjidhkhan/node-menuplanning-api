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
    static OrderByIDSQL(pid) {
            var sql = this.AllOrdersSQL()
            sql += ` WHERE orders.id = ${pid}`;
            return sql;
        }
        /**
         * All Main Courses
         */
    static OrderByCustomerSQL(pid) {
            var sql = this.AllOrdersSQL()
            sql += ` WHERE orders.customer_id =${pid}`;
            return sql;
        }
        /**
         * All Main Courses
         */
    static OrderByDateSQL(pid) {
        var sql = this.AllOrdersSQL()
        sql += ` WHERE orders.order_date LIKE '%${pid}%'`;
        return sql;
    }


    static allQuery() {
        let sql = `SELECT  order_details.order_id,orders.order_date, orders.booking_date,
            orders.customer_id,users.fullname,users.email,
            order_details.course_id,order_details.course_name, 
            meal_type.meal_type,course_type.course_type, order_details.servings
            FROM orders 
            JOIN order_details      ON orders.id = order_details.order_id
            JOIN users              ON users.id = orders.customer_id
            JOIN meal_type          ON meal_type.id = order_details.meal_type
            JOIN course_type        ON course_type.id = order_details.course_type`;
        return sql;
    }

}

export default Orders;