/*const express = require('express')
require('dotenv').config();
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(process.env.API_KEY);
const app = express()
const port = 3001

app.use(express.static('public'))
app.use(express.json)



app.get('/', (req, res) => {
  console.log('hit here')
  console.log(req.query)
  const params = {
    engine: "google",
    gl: "us",
    hl: "en",
    q: req.query.search
  };
  
    search.json(params, callback);
    
})


const callback = function(data) {
  console.log(data["organic_results"]);
};

// Show result as JSON


app.post('/', (req, res) => {
  res.statusCode(200).json(`<h2>${res.title}</h2><br><a href=${res.url}>${res.url}</a>
    <p>${res.snippet}</p>`)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  
})

*/

var cors = require('cors')


const express = require('express'),
      app = express();
app.use(cors())
app.get('/',(request,response)=>{
  response.json("Hello world");
});

//Binding the server to a port(3001)
app.listen(3001,()=>console.log("express server started at port 3001"));