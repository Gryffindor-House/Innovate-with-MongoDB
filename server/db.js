const { uri } = require("./config");
const { MongoClient } = require("mongodb");

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Shipwreck Collection
const collection = client.db("sample_geospatial").collection("shipwrecks");

function fetch_shipwreck() {
  try {
    // Make the appropriate DB calls
    collection.find({}).toArray(function (err, result) {
      if (err) {
        return false;
      }
      console.log(result);
      return result;
    });
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports = {
  fetch_shipwreck: fetch_shipwreck,
};
