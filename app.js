var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=60f2199b5e44438eafc386a33152e639';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })