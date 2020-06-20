//Same as script in marsTestData.html.
//File communicates with members.html!!!
$(document).ready(() => {

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });


  //NASA API key:
  // var APIKey = "HWIQtryDmQ136bRdLzdriQL1mIeaKvEuJfckD6Sb";
  var queryURL = "https://api.nasa.gov/insight_weather/?api_key=HWIQtryDmQ136bRdLzdriQL1mIeaKvEuJfckD6Sb&feedtype=json&ver=1.0+";

  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    // console.log(queryURL);
    // console.log(response);
    var solNum = response.sol_keys[0];
    var solObject = response[solNum];

    // var season = $("<div>");
    // season.html("Current Mars Season: " + solObject.Season);
    // $("#maintemp").append(season);
    // console.log("Season: ", solObject.Season);

    // for (var i = 0; i < response.sol_keys.length; i++) {
      var solNum = response.sol_keys[0];
      var solObject = response[solNum];
      // console.log(solObject);
      var day = $("<h1>");
      day.html("Mars Day Number: " + solNum);
      // $(".card-body:nth-child(0) .test").append(day);
      // $(".card-body:nth-child(1) .test").append(day);
      // $(".card-body:nth-child(2) .test").append(day);
      // $(".card-body:nth-child(3) .test").append(day);

      $(".test").append(day);

      var date = $("<p>");
      date.html("Date, Time: " + solObject.First_UTC);
      $(".test").append(date);

      var high = $("<p>");
      high.html("High: " + solObject.AT.mx + "°F");
      $(".test").append(high);

      var low = $("<p>");
      low.html("Low: " + solObject.AT.mn + "°F");
      $(".test").append(low);
    // }
  });
});
