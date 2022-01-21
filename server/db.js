const { uri } = require("./config");
const { MongoClient } = require("mongodb");

// Create a new MongoClient
const client = new MongoClient(uri);

// Fetching shipwrecks data
async function fetch_shipwreck() {
  try {
    await client.connect();

    // Connect the client to the server
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
// async function delete_shipwreck() {
//   try {
//     // Connect the client to the server

//     //  Fetching Collection Data
//     let results = await client
//       .db("sample_geospatial")
//       .collection("shipwrecks")
//       .deleteOne({ depth: { $gte: 10 } })
//       .then(function () {
//         console.log("Data Deleted");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

//     return results;
//   } catch (e) {
//     console.log(e);
//     return false;
//   } finally {
//     await client.close();
//   }
// }

async function authenticate_user(params) {
  try {
    // Connect the client to the server
    await client.connect();
    var query = {
      email_id: { $in: [params.email_id] },
      password: { $in: [params.password] },
    };
    console.log("inside authenticate");

    //  Fetching Collection Data
    let results = await client
      .db("sample_geospatial")
      .collection("users")
      .find(query)
      .toArray();
    return results.length == 0 ? false : true;
  } catch (e) {
    console.log(e);
    return false;
  } finally {
    await client.close();
  }
}

// Add shipwreck data

module.exports = {
  fetch_shipwreck: fetch_shipwreck,
  // delete_shipwreck: delete_shipwreck,
  authenticate_user: authenticate_user,
};
