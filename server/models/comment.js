const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const CommentSchema = new Schema(
  {
    body: { type: String, required: true },
    thread: { type: Schema.Types.ObjectId, ref: "Thread", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

CommentSchema.virtual("timestamp_formatted").get(() => {
  const isModified = !!this.updatedAt;
  const timestamp = isModified ? this.updatedAt : this.createdAt;
  return `${isModified ? "Updated" : "Created"} at ${DateTime.fromJSDate(
    timestamp
  ).toLocaleString(DateTime.DATE_MED)}`;
});

module.exports = mongoose.model("Comment", CommentSchema);
