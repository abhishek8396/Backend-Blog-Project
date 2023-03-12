const express = require("express")
const technologyapi = require('../Api/Technology')

const data = express.Router();
data.route("/technology").get(technologyapi.apiController)

module.exports = data;