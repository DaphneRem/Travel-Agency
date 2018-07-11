var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cardSchema = new Schema({
  title: String,
  subTitle: String,
  urlImage: String
});

cardSchema.methods.concatanceNameAndBlog = function() {
  this.title = this.title + this.subtitle;

  return this.title;
};

var Card = mongoose.model("Card", cardSchema);

module.exports = Card;
