const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TagSchema = new Schema({
  body: {
    type: String,
    required: true,
    maxLength: 20, // or more?
  },
});

module.exports = mongoose.model("Tag", TagSchema);
