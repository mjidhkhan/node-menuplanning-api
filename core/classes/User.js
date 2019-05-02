class User {
    constructor(full_name, user_name, user_email, password, user_status) {
            this.id = 0;
            this.fullname = full_name;
            this.username = user_name;
            this.email = user_email;
            this.hash_pass = password;
            this.status = user_status;
        }
        /**
         * Get All Users
         */
    static getAllUsersSQL() {
        let sql = `SELECT * FROM users`;
        return sql;
    }


    /**
     * Get User ByID
     * @param {*} id 
     */
    static getUserByIdSQL(id) {
        let sql = `SELECT * FROM users WHERE id =${id}`
        return sql;
    }

    /**
     * Add User
     */
    addUserSQL() {
        let sql = `INSERT INTO users (fullname, username, email, hashed_password,status)
                     VALUES('${this.fullname}', '${this.username}','${this.email}', '${this.hash_pass}',${this.status})`;
        return sql;
    }

    /**
     * Update User
     */
    updateUserQL(id) {
        let sql = `UPDATE User_type SET User_type = '${this.type}' WHERE id =${id}`;
        return sql;
    }

    /**
     *  Delete User
     * @param {*} id 
     */
    static deleteUserSQL(id) {
        let sql = `DELETE FROM users WHERE id = ${id}`;
        return sql;
    }

}



export default User;