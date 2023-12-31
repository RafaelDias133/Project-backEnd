const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  check: {
    type: Boolean,
    require: true,
  },
  data: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Task", TaskSchema);
