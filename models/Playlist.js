const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creamos el schema de la playlist
const playlistSchema = new Schema(
  {
    nameList: {
      type: String,
      require: true,
    },
    song: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
      require: false,
    },
    user: {
      type: mongoose.Schema.type.ObjectId,
      ref: "User",
      require: false,
    },
  },
  {
    timestamps: true,
  }

);

const Playlist = mongoose.model("Playlist", playlistSchema);
module.exports = { Playlist };
