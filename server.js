const express = require('express')
require('dotenv').config();
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(process.env.API_KEY);

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