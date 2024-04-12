const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Artist } = require("../models/Artist.js");
const { faker } = require("@faker-js/faker");

// Creamos usuarios adicionales
const artistList = [];

for (let i = 0; i < 50; i++) {
  const newUser = {
    fullName: faker.person.fullName(),
    musicGenre: faker.music.genre(),
    yearActivity: faker.date.anytime(),
    country: faker.location.country(),
  };
  artistList.push(newUser);
}

const userSeed = async () => {
  try {
    await connect();
    console.log("Tenemos conexión");

    // Borrar datos
    await Artist.collection.drop();
    console.log("Artistas eliminados");

    // Añadimos usuarios
    const documents = artistList.map((user) => new Artist(user));
    await Artist.insertMany(documents);
    console.log("Artistas creados correctamente!");
  } catch (error) {
    console.error("ERROR AL CONECTAR CON LA BBDD");
    console.error(error);
  } finally {
    mongoose.disconnect();
  }
};

userSeed();
