const express = require("express")
const fitnessapi = require('../Api/Fitness')

const data = express.Router();
data.route("/fitness").get(fitnessapi.apiController)

module.exports = data;