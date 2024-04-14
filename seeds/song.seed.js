const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Song } = require("../models/Song.js");
const { faker } = require("@faker-js/faker");

// Creamos usuarios adicionales
const songList = [];

for (let i = 0; i < 50; i++) {
  const newSong = {
    title: faker.music.songName(),
    duration: faker.number.int({ min: 60, max: 300 }),
    launchYear: faker.date.anytime(),
  };
  songList.push(newSong);
}

const songSeed = async () => {
  try {
    await connect();
    console.log("Tenemos conexión");

    // Borrar datos
    await Song.collection.drop();
    console.log("Canciones eliminadas");

    // Añadimos canciones
    const documents = songList.map((song) => new Song(song));
    await Song.insertMany(documents);
    console.log("Canciones creadas correctamente!");
  } catch (error) {
    console.error("ERROR AL CONECTAR CON LA BBDD");
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

songSeed();
