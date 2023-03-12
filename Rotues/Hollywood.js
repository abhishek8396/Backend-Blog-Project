const express = require("express")
const hollywoodapi = require('../Api/Hollywood')

const data = express.Router();
data.route("/hollywood").get(hollywoodapi.apiController)

module.exports = data;