const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ event: "Semana OmniStack 11.0" });
});

app.listen(3333);
