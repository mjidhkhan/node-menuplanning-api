class Review {

    /**
     * All Reviews
     */
    static AllReviewsSQL() {
            return this.baseQuery()
        }
        /**
         * All Reviews ById
         */
    static ReviewByIDSQL(pid) {
            var sql = this.baseQuery()
            sql += ` WHERE orders.id = ${pid}`;
            return sql;
        }
        /**
         * Reviews By Customer_ID
         */
    static ReviewByCustomerSQL(pid) {
            var sql = this.baseQuery()
            sql += ` WHERE orders.customer_id =${pid}`;
            return sql;
        }
        /**
         * Reviews by  Date
         */
    static ReviewByDateSQL(pid) {
        var sql = this.baseQuery()
        sql += ` WHERE orders.order_date LIKE '%${pid}%'`;
        return sql;
    }


    static baseQuery() {
        let sql = `SELECT *
        FROM review_rating
        JOIN users
        ON  review_rating.user_id = users.id
        JOIN meal_course
        ON meal_course.id = review_rating.course_id
        JOIN course_details
        ON review_rating.course_id= course_details.course_id`;
        return sql;
    }


}

export default Review;