const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creamos el schema del usuario
const songSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    launchYear: {
      type: Date,
      required: true,
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Song = mongoose.model("Song", songSchema);
module.exports = { Song };
