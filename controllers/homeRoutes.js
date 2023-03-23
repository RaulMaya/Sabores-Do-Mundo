const router = require("express").Router();
const { Country, Food, Recipe } = require("../models");

router.get("/", async (req, res) => {});

router.get("/food/:id", (req, res) => {});

router.get("/recipe/:id", (req, res) => {});

router.get("/login", (req, res) => {});

module.exports = router;
