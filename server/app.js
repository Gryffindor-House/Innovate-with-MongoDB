const express = require("express");
const { fetch_shipwreck, authenticate_user, register_user } = require("./db");
const app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", async (req, res) => {
  let results = await fetch_shipwreck();
  console.log(results);
});

app.post("/login", async (req, res) => {
  try {
    let val = await authenticate_user(req.body);
    console.log("LOL", val);
    res.send(val);
  } catch (e) {
    res.send(false);
  }
});
app.post("/signup", async (req, res) => {
  try {
    let params = {
      name: req.body.first_name + " " + req.body.last_name,
      email_id: req.body.email_id,
      password: req.body.password,
    };
    res.send(await register_user(params));
  } catch (e) {
    return false;
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Running in port:", PORT);
});
