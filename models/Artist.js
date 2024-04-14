const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creamos el schema del artista
const artistSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    musicGenre: {
      type: String,
      required: true,
    },
    yearActivity: {
      type: Date,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Artist = mongoose.model("Artist", artistSchema);
module.exports = { Artist };
