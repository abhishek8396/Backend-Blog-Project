const express = require("express")
const foodapi = require('../Api/Food')

const data = express.Router();
data.route("/food").get(foodapi.apiController)

module.exports = data;