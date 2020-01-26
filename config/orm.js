const connection = require("./connection.js");

let orm = {

    selectAll: function(table) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, data) => {
            if (err) throw err;
            console.log(data);
        });
    }
}


module.exports = orm;