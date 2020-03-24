const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ event: "Semana OmniStack 11.0" });
});

module.exports = routes;
