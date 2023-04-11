//Capture User Input
//Make search button clickable
//Add user input to local storage when submitted
//Append user input with auto locations
//Fetch weather api url
//

var submitBtn = document.querySelector('.submit');
//var userInput = document.getElementById('input').value;

  submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    //console.log(userInput);
    //localStorage.setItem(userInput);
    var savedL = document.getElementById('savedlctns');
    var newBtn = document.createElement('button');
    newBtn.classList.add("autolctn");
    newBtn.innerText = document.getElementById("input").value;

    savedL.append(newBtn);
    console.log(input.value);
    localStorage.setItem("input.value", JSON.stringify(input.value));
    input.value = '';
   
    $(function getLatLon() {
        //var randomTake = document.getElementById('input').value
        var requestUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + newBtn.innerText + "&limit=1&appid=dcb4a51f4037e4402071e03b0811d2ca";
  
    $.ajax({
        url: requestUrl,
        method: "GET"
    }).then(function(response) {
        //return response;
        console.log(response);
        var lat = response[0].lat;
        var lon = response[0].lon;
        console.log(lat);
        console.log(lon);
        
     var currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=dcb4a51f4037e4402071e03b0811d2ca";
      
    $.ajax({
        url: currentUrl,
        method: "GET"
    }).then(function(responseC) {
        console.log(responseC);
        var cityName = responseC.name;
        var tempDeg = responseC.main.temp;
        var iconWthr = responseC.weather.icon;
        var humidAmnt = responseC.main.humidity;
        var wndSpd = responseC.wind.speed;

        console.log(cityName);
        console.log(tempDeg);
        console.log(iconWthr);
        console.log(humidAmnt);
        console.log(wndSpd);

        var cwCity = document.querySelector('.city-name');
        cwCity.innerText = cityName;

        var cwIcon = document.querySelector('.weather-icon');
        cwIcon.innerText = iconWthr;

        var cwTemp = document.querySelector('.city-temp');
        cwTemp.innerText = "Current Temperature: " + tempDeg;

        var cwHum = document.querySelector('.humidity');
        cwHum.innerText = "Humidity Levels: " + humidAmnt;

        var cwWnd = document.querySelector('.wind-speed');
        cwWnd.innerText = "Wind Speed: " + wndSpd;

        var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=dcb4a51f4037e4402071e03b0811d2ca"
    
        $.ajax({
            url: fiveDayUrl,
            method: "GET"
        }).then(function(responseF){
            
            console.log(responseF);
        
        //var cityNameF = responseF.city.name;
        var tempDegF = responseF.list[1].main.temp;
        var iconWthrF = responseF.list[9].weather.icon;
        var humidAmntF = responseF.list[17].main.humidity;
        var wndSpdF = responseF.list[25].wind.speed;

        //console.log(cityNameF);
        console.log(tempDegF);
        console.log(iconWthrF);
        console.log(humidAmntF);
        console.log(wndSpdF);
        })
    });
   
    });
});
  });

  
