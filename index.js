$("form").submit(function (e) {
    e.preventDefault()
    var query = $("#search").val()
    var API_KEY = '3ae85a2167316a4a8799634daaa34a50a19c7b9c075bae5478f414f67f596aa1'

    var url = `https://serpapi.com/search.json?engine=google&q=${query}&api_key=${API_KEY}`
    //$.get(url, function (data) {
    //    console.log(data)
    //})
    
    var express = require('express')
    var app = express()
    
    app.get('/server.js', function (req, res) {
      res.send(query)
    })
    
})
