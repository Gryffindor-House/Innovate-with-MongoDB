const { uri } = require("./config");
const { MongoClient } = require("mongodb");

// Create a new MongoClient
const client = new MongoClient(uri);

// Fetching shipwrecks data
async function fetch_shipwreck() {
  try {
    // Connect the client to the server
    await client.connect();

    //  Fetching Collection Data
    let results = await client
      .db("sample_geospatial")
      .collection("shipwrecks")
      .find({})
      .toArray();

    return results;
  } catch (e) {
    console.log(e);
    return false;
  } finally {
    await client.close();
  }
}

// Update shipwreck data

// Delete shipwreck data
let results = await client
.db("sample_geospatial")
.collection("shipwrecks")
.deleteOne({ depth: {$gte : 10} }).then(function(){
  console.log("Data Deleted");
}).catch(function(error){
  console.log(error);
})

// Add shipwreck data

module.exports = {
  fetch_shipwreck: fetch_shipwreck,
};