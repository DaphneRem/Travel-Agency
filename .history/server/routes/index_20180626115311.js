var express = require("express");
var Article = require("../models/card");
var mongoose = require("mongoose");

var router = express.Router();

router.get("/getCards", function(req, res, next) {
  Article.find(function(err, articles) {
    if (err) {
      res.status(400);
      res.send();
    }
    console.log("returning all the card.");
    res.send(articles);
  });
});

router.post("/addCard", function(req, res, next) {
  var newArticle = new Article(req.body);
  newArticle._id = mongoose.Types.ObjectId();

  newArticle.save(function(err) {
    if (err) {
      console.log("not saved!");
      res.status(400);
      res.send();
    }

    console.log("saved!");
    res.send({ id: newArticle._id });
  });
});

router.post("/deleteCard", function(req, res, next) {
  Article.remove({ _id: req.body.id }, function(err) {
    if (err) {
      console.log("not removed!");
      res.status(400);
      res.send();
    }

    console.log("removed!");
    res.send({ status: "ok" });
  });
});

router.post("/updateCard", function(req, res, next) {
  var article = new Article(req.body);

  Article.update({ _id: article.id }, article, function(err) {
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
