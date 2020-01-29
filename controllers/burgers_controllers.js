let express = require("express");
let burger = require("../models/burger.js");
let consT = require("console.table");

let router = express.Router();

router.get("/", (req, res) => {

    res.render("index", { temp: "Jacob's Burger App", data: "This is my test for handlebars" });


});

router.get("/burgers", (req, res) => {
    burger.all((data) => {
        let hbObj = {
            burgers: (data)
        };
        console.log(hbObj);
        res.render("burgers", hbObj);
    });

})










module.exports = router;