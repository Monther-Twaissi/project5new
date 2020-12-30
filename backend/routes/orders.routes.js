var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const base = new mongoose.Schema({
  username: String,
  cardName: String,
  cardDesc: String,
  cardImg: String,
  quantity: Number,
  size: String,
});
const Model = mongoose.model("orders", base);

router.get("/orders", function (req, res, next) {
  Model.find((e, r) => {
    if (e) {
      console.log(e);
    } else {
      res.send(r);
    }
  });
});
router.post("/orders", function (req, res, next) {
  const newData = new Model(req.body);
  newData.save(function (err) {
    if (err) {
      res.send("data not saved");
      return handleError(err);
    }
  });
  res.send("data saved");
});
// ------------------------------
// ------------------------------
// ------------------------------
router.get("/orders/:id", function (req, res, next) {
  const UserModel = mongoose.model(req.params.id, base);
  UserModel.find((e, r) => {
    if (e) {
      console.log(e);
    } else {
      res.send(r);
    }
  });
});

router.post("/orders/:id", function (req, res) {
  const UserModel = mongoose.model(req.params.id, base);
  const newData = new UserModel(req.body);
  newData.save(function (err) {
    if (err) {
      res.send("data not saved");
      return handleError(err);
    }
  });
  res.send("data saved");
});

router.put("/orders/done/:userid/:taskid", function (req, res) {
  const UserModel = mongoose.model(req.params.userid, base);
  UserModel.findById(req.params.taskid, function (e, r) {
    if (e) {
      res.send(e);
    } else {
      r.isdone = true;
      r.save();
    }
  })
    .then(() => {
      res.send("data saved");
    })
    .catch((e) => {
      res.send(e);
    });
  // res.send("data saved");
});

router.put("/orders/update/:userid/:taskid", function (req, res) {
  const UserModel = mongoose.model(req.params.userid, base);
  UserModel.updateOne(
    { _id: req.params.taskid },
    { task: req.body.task },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.send("data updated");
      }
    }
  );
  // res.send("data saved");
});

router.delete("/orders/:userid/:taskid", function (req, res, next) {
  const UserModel = mongoose.model(req.params.userid, base);

  UserModel.deleteOne({ _id: req.params.taskid })
    .then(() => {
      res.send("data delete");
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
});
// ------------------------------
// ------------------------------
// ------------------------------
router.put("/orders/done/:id", function (req, res) {
  Model.findById(req.params.id, function (e, r) {
    if (e) {
      res.send(e);
    } else {
      r.isdone = true;
      r.save();
    }
  })
    .then(() => {
      res.send("data saved");
    })
    .catch((e) => {
      res.send(e);
    });
  // res.send("data saved");
});

router.put("/orders/update/:id", function (req, res) {
  Model.updateOne(
    { _id: req.params.id },
    { task: req.body.task },
    function (err, docs) {
      if (err) {
        console.log(err);
      } else {
        res.send("data updated");
      }
    }
  );
  // res.send("data saved");
});

router.delete("/orders/:id", function (req, res, next) {
  Model.deleteOne({ _id: req.params.id })
    .then(() => {
      res.send("data delete");
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
});

module.exports = router;
