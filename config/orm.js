const connection = require("./connection.js");
const consT = require("console.table");

let orm = {

    selectAll: function(table) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, data) => {
            if (err) throw err;
            console.table(data);
        });
    }
}


module.exports = orm;