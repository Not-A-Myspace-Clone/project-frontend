const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const apiKey = "9b6582aee5eb486aa5ed6f78bd01e32b";
const url = `${proxyUrl}https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey};`;
const request = new Request(url);

fetch(request)
  .then(response => response.json())
  .then((news) => {
    console.log(news);
  })
  .catch(error => {
    console.log(error);
  });

// $(document).ready(function () {
//     var url = 'http://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=9b6582aee5eb486aa5ed6f78bd01e32b';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })
// })    

