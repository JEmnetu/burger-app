let express = require("express");
let burger = require("../models/burger.js");
let consT = require("console.table");

let router = express.Router();

//Disokay all burgers
router.get("/", (req, res) => {

    burger.all((data) => {
        let burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("burgers", burgerObj);
    });


});
// Display JSON data for all burgers
router.get("/api/burgers", (req, res) => {
    burger.all((data) => {
        res.json(data);

    });
})

// Add a new burger
router.post("/api/burgers", (req, res) => {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
        res.json({ id: result.insertId });
    });
});


//Update a burger



// Delete a burger
router.delete("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.delete(condition, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});








module.exports = router;