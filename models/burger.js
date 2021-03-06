const orm = require("../config/orm")

const burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
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

module.exports = (burger);
