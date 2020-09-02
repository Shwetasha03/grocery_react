const mongoose = require("mongoose");
mongoose.pluralize(null);

const Schema = mongoose.Schema;

let sandip = new Schema({
  name: {
    type: String
  },
  age1: {
    type: Number
  }
});

module.exports = mongoose.model("Grocery", sandip);