const express = require("express");

const burger = require("../models/burger");

var router = express.Router();


router.get("/", (req, res) => {
    burger.burgers.all((data) => {
        let burgObj = {
            burgers: data
        };
        res.render("index", burgObj);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.burgers.create(["name", "devoured"], [req.body.name, req.body.devoured], function (result) {
        
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {

                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});


module.exports = router;