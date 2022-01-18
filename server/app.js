const express = require("express");
const app = express();

const db_js = require("./db");

app.get("/", (req, res) => {
  console.log("In get");
  console.log(db_js.fetch_shipwreck());
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("http://localhost:5000");
});
