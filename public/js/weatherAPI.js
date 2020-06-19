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
      // console.log(response.sol_keys.length);

      for (var i = 0; i < response.sol_keys.length; i++) {
        var solNum = response.sol_keys[i];
        var solObject = response[solNum];
        // console.log(solObject);

        $(".marsDay").html("<h1>" + " Mars Day Number: " + solNum + "</h1>");
        // console.log("Mars Day Number: ", solNum);

        $(".season").html("<h2>" + "Current Mars Season: " + solObject.Season + "</h2>");
        // console.log("Season: ", solObject.Season);

        // $(".city").html("<h1>" + " Mars Day: " + solObject[i] + "</h1>");
        // console.log("Mars Day Number: ", solObject[i]);
        //Will work with response[548] but not with [i] or any of the above variables
        $(".dateTime").text("Date and Time: " + solObject.First_UTC);
        console.log("Date, Time: ", solObject.sol.First_UTC);

        $(".high").text("High: " + solObject.AT.mx + " F");
        console.log("High: ", solObject.AT.mx);

        $(".low").text("Low: " + solObject.AT.mn + " F");
        console.log("Low: ", solObject.AT.mn);
        console.log("________________________");


        $("#day0Date").html("Mars Day Number: " + solNum);
        console.log("Mars Day Number: ", solObject[i]);

        
        $("#day0Date").html("Mars Day Number: " + solNum);
      }
    });

  // $("#day0High").text("High: " + solObject[0].AT.mx + "°F");
  // $("#day0Low").text("Low: " + response[548+i].AT.mn + "°F");

  // $("#day1Date").html("Mars Day Number: " + response.sol_keys[i]);
  // $("#day1High").text("High: " + response[548+i].AT.mx + "°F");
  // $("#day1Low").text("Low: " + response[548+i].AT.mn + "°F");

  // $("#day2Date").html("Mars Day Number: " + response.sol_keys[i]);
  // $("#day2High").text("High: " + response[548+i].AT.mx + "°F");
  // $("#day2Low").text("Low: " + response[548+i].AT.mn + "°F");

  // $("#day3Date").html("Mars Day Number: " + response.sol_keys[i]);
  // $("#day3High").text("High: " + response[548+i].AT.mx + "°F");
  // $("#day3Low").text("Low: " + response[548+i].AT.mn + "°F");

  // $("#day4Date").html("Mars Day Number: " + response.sol_keys[i]);
  // $("#day4High").text("High: " + response[548+i].AT.mx + "°F");
  // $("#day4Low").text("Low: " + response[548+i].AT.mn + "°F");

  // $("#day5Date").html("Mars Day Number: " + response.sol_keys[i]);
  // $("#day5High").text("High: " + response[548+i].AT.mx + "°F");
  // $("#day5Low").text("Low: " + response[548+i].AT.mn + "°F");


  // Log the data in the console as well
  // console.log("Wind Speed: " + response.wind.speed);
  // console.log("Humidity: " + response.main.humidity);
  // console.log("Temperature (F): " + tempF);
  // );
});
