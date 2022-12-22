const { Schema, model } = require("mongoose");

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },
});

module.exports = model("Client", ClientSchema);
