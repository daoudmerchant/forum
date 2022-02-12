const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const ThreadSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }],
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  timestamp: { type: Date, required: true },
});

ThreadSchema.virtual("timestamp_formatted").get(() =>
  DateTime.fromJSDate(this.timestamp).toLocaleString(DateTime.DATE_MED)
);

module.exports = mongoose.model("Thread", ThreadSchema);
