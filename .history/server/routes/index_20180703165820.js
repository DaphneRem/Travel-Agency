var express = require("express");
var Card = require("../models/card");
var mongoose = require("mongoose");

var router = express.Router();

router.get("/getCards", function(req, res, next) {
  Card.find(function(err, cards) {
    if (err) {
      res.status(400);
      res.send();
    }
    console.log("returning all the card.");
    res.send(cards);
  });
});

router.get("/getCards/:_id", function(req, res, next) {
  Card.find({ _id: req.params._id }, function(err, cards) {
    if (err) {
      res.status(400);
      res.send();
    }
    console.log("returning my card.");
    res.send(cards);
  });
});

router.patch('/card/:_id'), function (req, res) {
    var updateObject = req.body;
    newCard
      .where({ _id: req.params._id })
      .update(req.body)
      .then(function(data) {
        res.send(data);
      });
};

app.patch('/card/:_id', (req, res) => {
  var id = req.params.id
  var update = {autore: req.body.autore}
  if (!ObjectID.isValid(id)) {
    res.status(400).send()
  } Blog.findByIdAndUpdate(id, update, {new: true}).then((docs) => {
      res.send({docs});
  }).catch((e) => {
    res.status(400)
  });
});

router.post("/addCard", function(req, res, next) {
  var newCard = new Card(req.body);
  newCard._id = mongoose.Types.ObjectId();

  newCard.save(function(err) {
    if (err) {
      console.log("not saved!");
      res.status(400);
      res.send();
    }

    console.log("saved!");
    res.send({
      id: newCard.id
    });
  });
});


router.delete("/deleteCard/:_id", function(req, res, next) {
  Card.remove({ _id: req.params._id }, function(err) {
    if (err) {
      console.log("not updated!");
      res.status(400);
      res.send();
    } else {
      res.send({ status: "ok" });
    }
  });
});

router.post("/updateCard", function(req, res, next) {
  var card = new Card(req.body);

  Card.update({ _id: card.id }, card, function(err) {
    if (err) {
      console.log("not updated!");
      res.status(400);
      res.send();
    }

    console.log("updated!");
    res.send({ status: "ok" });
  });
});

module.exports = router;
