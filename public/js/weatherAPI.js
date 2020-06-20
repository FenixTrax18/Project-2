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
    console.log(solNum)
    var solObject = response[solNum];
    console.log(solObject.First_UTC);

    // var season = $("<div>");
    // season.html("Current Mars Season: " + solObject.Season);
    // $("#maintemp").append(season);
    // console.log("Season: ", solObject.Season);

    for (var i = 0; i < response.sol_keys.length; i++) {
      var solNum = response.sol_keys[i];
      var solObject = response[solNum];
      // console.log(solObject);
      var day = $("<div>");
      day.html("Mars Day Number: " + solNum);
      $("#test").append(day);

      var date = $("<p>");
      date.html("Date, Time: " + solObject.First_UTC);
      $("#test").append(date);

      var high = $("<p>");
      high.html("High: " + solObject.AT.mx + "°F");
      $("#test").append(high);

      var low = $("<p>");
      low.html("Low: " + solObject.AT.mn + "°F");
      $("#test").append(low);
    }
  });
});
