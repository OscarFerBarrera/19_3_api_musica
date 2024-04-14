const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Artist } = require("../models/Artist.js");
const { Song } = require("../models/Song.js");
const { generateRandom } = require("../utils.js");

const SongRelationSeed = async () => {
  try {
    await connect();
    console.log("Tenemos conexión!");

    // Recuperamos artistas y canciones
    const artist = await Artist.find();
    const songs = await Song.find();

    // Comprobar que existen artistas
    if (!artist.length) {
      console.error("No hay artistas para relacionar en la base de datos");
      return;
    }
    // Comprobar que existen canciones
    if (!songs.length) {
      console.error("No hay canciones para relacionar en la base de datos");
      return;
    }

    for (let i = 0; i < songs.length; i++) {
      const song = songs[i];
      const randomArtist = artist[generateRandom(0, artist.length - 1)];
      song.artist = randomArtist.id;
      await song.save();
    }
    console.log("Relacion de canciones y artistas creadas correctamente!");
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.disconnect();
  }
};

SongRelationSeed();
