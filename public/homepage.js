$(document).ready(() => {
  const queryURL =
    "https://api.nasa.gov/planetary/apod?api_key=Lw59dX1hoc67rrcErxzay8oTsrx0Cw2qZBdKTusr";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);
    $(".url").html("<img src=" + response.url + ">" + "</img>");
  });
});
