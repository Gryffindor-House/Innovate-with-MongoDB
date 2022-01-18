const express = require("express");
const { fetch_shipwreck } = require("./db");
const app = express();

const db_js = require("./db");

app.get("/", async (req, res) => {
  console.log("In get");
  let results = await fetch_shipwreck();
  console.log(results);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("http://localhost:5000");
});
