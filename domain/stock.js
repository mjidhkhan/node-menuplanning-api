class Stock {
    constructor(item_name, quantity, reorder_level, measure_unit) {
        this.stock_id = 0;
        this.item = item_name;
        this.quantity = quantity;
        this.reorder = reorder_level;
        this.unit = measure_unit;

    }

    static getAllStockItemsSQL() {
        let sql = `SELECT * FROM stock`;
        return sql;
    }

    static getStockItemByIdSQL(stock_id) {
        let sql = `SELECT * FROM stock WHERE id = ${stock_id}`;
        return sql;
    }

    static deleteStockItemByIdSQL(stock_id) {
        let sql = `DELETE  FROM stock WHERE id = ${stock_id}`;
        return sql;
    }

    static addStockItemSQL() {
        let sql = `INSERT INTO  stock (ingreditent_name,quantity ,reorder_level ,units  ) 
                        VALUES (${this.item},${this.quantity},${this.reorder}, ${this.unit})`;
        return sql;
    }
    updateStockItemSQL(stock_id) {
        var columns = {
            "0": "ingredient_name",
            "1": "quantity",
            "2": "reorder_level",
            "3": "units"
        }
        var context = {
            "0": this.item,
            "1": this.quantity,
            "2": this.reorder,
            "3": this.unit
        }

        var query = "UPDATE stock SET ";
        Object.keys(context).forEach(function(key) {
            console.log(typeof(context[key]))

            if (!(context[key] === null || context[key] === ""))
                if (typeof context[key] !== 'undefined') {
                    query += columns[key] + "='" + context[key] + "',";
                }
        });
        query += ` WHERE id = ${stock_id}`;

        //replace last comma from query
        var n = query.lastIndexOf(",");
        query = query.slice(0, n) + query.slice(n).replace(",", "");
        let sql = query
            //`UPDATE  stock SET ingredient_name = '${this.item}',
            // quantity = ${this.quantity}, reorder_level = ${this.reorder}, units = '${this.unit}' WHERE id = ${stock_id}`;
        console.log(sql)
        return sql;
    }




}
export default Stock;