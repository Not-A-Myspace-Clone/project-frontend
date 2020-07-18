var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://nwcbc-project-2.herokuapp.com/user/1",
    "method": "GET",
    "headers": {
        "Access-Control-Allow-Origin": "true",
        "x-rapidapi-key": "83c24764bamsh4ab0e0175aae739p1180b7jsn62d3645b374e",
        "x-bingapis-sdk": "true"
      }

  }
  $.ajax(settings).done(function (response) {
    console.log(response.links)
    $('.name').html(response.name)
    $('.username').html(response.username)
    $('.email').html(response.email)
    $('.description').html(response.description)
    $('.location').html(response.location)
    const link = response.links
    $('.link').html(`<a href=${response.links}</a>`)
  });