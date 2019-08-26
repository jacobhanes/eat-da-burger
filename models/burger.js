const orm = require("../config/orm")

const burgers = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      },
      
      create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
          cb(res);
        });
      },
      update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      }
}

module.exports = (burgers);
// orm.selectAll("burgers", "burger_name"),

// orm.insertOne("burgers", "name", "Chicken Bacon"),

// orm.updateOne("burgers", "1", "devoured", "id")