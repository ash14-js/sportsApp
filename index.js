$("form").submit(function (e) {
    e.preventDefault()
    var query = $("#search").val()
    var API_KEY = 'f5f717749812d8d2fa974f1c0d11370ca039e4848e2731225e0679cfbc636a5d'

    var url = `https://serpapi.com/search.json?engine=google&q=${query}&api_key=${API_KEY}`
    $.get(url, function (data) {
        console.log(data)
    })


    
})