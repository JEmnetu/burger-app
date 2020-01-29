const connection = require("./connection.js");
const consT = require("console.table");

let orm = {

    selectAll: function(table, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    }
}


module.exports = orm;