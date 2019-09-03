const express = require("express");

const burger = require("../models/burger");

const router = express.Router();



router.get("/", function(req, res) {
    burger.burger.all(function(data) {
      const burgObject = {
        burgers: data
      };
      console.log(burgObject);
      res.render("index", burgObject);
    });
  });

router.post("/api/burgers", function (req, res) {
    burger.burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function (result) {
        
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