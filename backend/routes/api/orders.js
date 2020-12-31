const express = require("express");
const router = express.Router();
const Orders = require('../../models/orders');

router.get("/orders", function (req, res, next) {
  Orders.find((e, r) => {
    if (e) {
      console.log(e);
    } else {
      res.send(r);
    }
  });
});//1

router.post("/orders", function (req, res, next) {
  const newData = new Orders(req.body);
  newData.save(function (err) {
    if (err) {
      res.send("data not saved");
      return handleError(err);
    }
  });
  res.send("data saved");
});//2

router.get("/orders/:id", function (req, res, next) {
  const UserModel = mongoose.model(req.params.id, Orders);
  UserModel.find((e, r) => {
    if (e) {
      console.log(e);
    } else {
      res.send(r);
    }
  });
});//3

router.post("/orders/:id", function (req, res) {
  const UserModel = mongoose.model(req.params.id, Orders);
  const newData = new UserModel(req.body);
  newData.save(function (err) {
    if (err) {
      res.send("data not saved");
      return handleError(err);
    }
  });
  res.send("data saved");
});//4

router.put("/orders/:id", function (req, res) {
  Orders.updateOne(
    { _id: req.params.id },
    { quantity: req.body.quantity },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.send("data updated");
      }
    }
  );
});//5

router.delete("/orders/:id", function (req, res, next) {
  Orders.deleteOne({ _id: req.params.id })
    .then(() => {
      res.send("data delete");
    })
    .catch(function (error) {
      console.log(error); 
    });
});//6

module.exports = router;