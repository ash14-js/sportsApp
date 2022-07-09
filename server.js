const express = require('express')
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("d5be2cab30a3eab6f8b63046403408a90a38a8bdb33fe26396b20debec8afa17");


const app = express()
const port = 3000

app.get('/', (req, res) => {
    search.json(params, callback);
})

const params = {
  engine: "google",
  q: "Coffee",
};

const callback = function(data) {
  console.log(data["organic_results"]);
};

// Show result as JSON

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})