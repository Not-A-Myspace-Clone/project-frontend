var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key": "83c24764bamsh4ab0e0175aae739p1180b7jsn62d3645b374e",
    "x-bingapis-sdk": "true"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response.value[0].provider[0].name)
  for (i = 0; i < response.value.length; i++) {
    const title = response.value[i].name;
    const description  = response.value[i].description;
    const thumbnail = response.value[i].image.thumbnail.contentUrl;
    const link  = response.value[i].url;
    const publisher = response.value[i].provider[0].name;
    $('.container-news').append(`<h4><small>RECENT STORIES</small></h4>
    <hr>
    <h2><a href='${link}'>${title}</a></h2>
    <h5><span class="label label-success">${publisher}</span></h5><br>
    <p>${description}</p>
    <hr>`)

  }
});
