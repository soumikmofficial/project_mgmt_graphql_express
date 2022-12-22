const { model, Schema } = require("mongoose");

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  client: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
});

module.exports = model("Project", ProjectSchema);
