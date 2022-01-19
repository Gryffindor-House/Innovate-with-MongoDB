const express = require("express");
const { fetch_shipwreck } = require("./db");
const app = express();
var cors = require("cors");

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", async (req, res) => {
  let results = await fetch_shipwreck();
  console.log(results);
});

app.post("/login", (req, res) => {
  console.log(req.body.params);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Running in port:", PORT);
});
