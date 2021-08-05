const formData = require("./data");
const express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
app.use(express.json());
const port = 3001;

app.get("/formOne", (req, res) => {
  res.json({ data: formData.formOneData, id: "F1A" });
});
app.get("/formOnePartB", (req, res) => {
  res.json({ data: formData.formOnePartB, id: "F1B" });
});
app.get("/formTwo", (req, res) => {
  res.json({ data: formData.formTwoData, id: "F2A" });
});
app.post("/submit", (req, res) => {
  res.json({ message: `Form with the id ${req.body.id} submission succeeded` });
});
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
