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
        var columns = {
            "0": "fullname",
            "1": "username",
            "2": "email",
            "3": "hashed_password",
            "4": "status",
        }
        var context = {
            "0": this.fullname,
            "1": this.username,
            "2": this.email,
            "3": this.hash_pass,
            "4": this.status,
        }

        var sql = "UPDATE users SET ";
        Object.keys(context).forEach(function(key) {
            if (!(context[key] === null || context[key] === ""))
                if (typeof context[key] !== 'undefined') {
                    sql += columns[key] + "='" + context[key] + "',";
                }
        });
        sql += ` WHERE id = ${id}`;

        //replace last comma from query
        var n = sql.lastIndexOf(",");
        sql = sql.slice(0, n) + sql.slice(n).replace(",", "");
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