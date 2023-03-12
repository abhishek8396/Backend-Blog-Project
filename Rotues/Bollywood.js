const express = require("express")
const bollywoodapi = require('../Api/Bollywood')

const data = express.Router();
data.route("/bollywood").get(bollywoodapi.apiController)

module.exports = data;