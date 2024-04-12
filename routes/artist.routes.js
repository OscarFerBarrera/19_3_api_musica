const express = require("express");

// Models
const { Artist } = require("../models/artist.js");

// Crear el router propio
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Asi leemos query params
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const artists = await Artist.find()
      .limit(limit)
      .skip((page - 1) * limit);

    // Num total de elementos
    const totalElements = await Artist.countDocuments();

    const response = {
      totalItems: totalElements,
      totalPages: Math.ceil(totalElements / limit),
      currentPage: page,
      data: artists,
    };

    res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = { artistRouter: router };
