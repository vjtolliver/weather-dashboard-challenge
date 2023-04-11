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
        var tempDegFD1 = responseF.list[1].main.temp;
        var iconWthrFD1 = responseF.list[1].weather.icon;
        var humidAmntFD1 = responseF.list[1].main.humidity;
        var wndSpdFD1 = responseF.list[1].wind.speed;

        var tempDegFD2 = responseF.list[9].main.temp;
        var iconWthrFD2 = responseF.list[9].weather.icon;
        var humidAmntFD2 = responseF.list[9].main.humidity;
        var wndSpdFD2 = responseF.list[9].wind.speed;

        var tempDegFD3 = responseF.list[17].main.temp;
        var iconWthrFD3 = responseF.list[17].weather.icon;
        var humidAmntFD3 = responseF.list[17].main.humidity;
        var wndSpdFD3 = responseF.list[17].wind.speed;

        var tempDegFD4 = responseF.list[25].main.temp;
        var iconWthrFD4 = responseF.list[25].weather.icon;
        var humidAmntFD4 = responseF.list[25].main.humidity;
        var wndSpdFD4 = responseF.list[25].wind.speed;

        var tempDegFD5 = responseF.list[33].main.temp;
        var iconWthrFD5 = responseF.list[33].weather.icon;
        var humidAmntFD5 = responseF.list[33].main.humidity;
        var wndSpdFD5 = responseF.list[33].wind.speed;

        //console.log(cityNameF);
        console.log(tempDegFD1);
        console.log(iconWthrFD1);
        console.log(humidAmntFD1);
        console.log(wndSpdFD1);

        var fdfIconO = document.querySelector('.d-one-icon');
        fdfIconO.innerText = iconWthrFD1;

        var fdfTempO = document.querySelector('.d-one-temp');
        fdfTempO.innerText = "Temperature: " + tempDegFD1 + " degrees";

        var fdfHumO = document.querySelector('.d-one-hum');
        fdfHumO.innerText = "Humidity Level: " + humidAmntFD1 + " percent";

        var fdfWndO = document.querySelector('.d-one-wind');
        fdfWndO.innerText = "Wind Speed: " + wndSpdFD1 + " mph";

        console.log(tempDegFD2);
        console.log(iconWthrFD2);
        console.log(humidAmntFD2);
        console.log(wndSpdFD2);

        var fdfIconTw = document.querySelector('.d-two-icon');
        fdfIconTw.innerText = iconWthrFD2;

        var fdfTempTw = document.querySelector('.d-two-temp');
        fdfTempTw.innerText = "Temperature: " + tempDegFD2 + " degrees";

        var fdfHumTw = document.querySelector('.d-two-hum');
        fdfHumTw.innerText = "Humidity Level: " + humidAmntFD2 + " percent";

        var fdfWndTw = document.querySelector('.d-two-wind');
        fdfWndTw.innerText = "Wind Speed: " + wndSpdFD2 + " mph";

        console.log(tempDegFD3);
        console.log(iconWthrFD3);
        console.log(humidAmntFD3);
        console.log(wndSpdFD3);

        var fdfIconTh = document.querySelector('.d-thr-icon');
        fdfIconTh.innerText = iconWthrFD3;

        var fdfTempTh = document.querySelector('.d-thr-temp');
        fdfTempTh.innerText = "Temperature: " + tempDegFD3 + " degrees";

        var fdfHumTh = document.querySelector('.d-thr-hum');
        fdfHumTh.innerText = "Humidity Level: " + humidAmntFD3 + " percent";

        var fdfWndTh = document.querySelector('.d-thr-wind');
        fdfWndTh.innerText = "Wind Speed: " + wndSpdFD3 + " mph";

        console.log(tempDegFD4);
        console.log(iconWthrFD4);
        console.log(humidAmntFD4);
        console.log(wndSpdFD4);

        var fdfIconFo = document.querySelector('.d-four-icon');
        fdfIconFo.innerText = iconWthrFD4;

        var fdfTempFo = document.querySelector('.d-four-temp');
        fdfTempFo.innerText = "Temperature: " + tempDegFD4 + " degrees";

        var fdfHumFo = document.querySelector('.d-four-hum');
        fdfHumFo.innerText = "Humidity Level: " + humidAmntFD4 + " percent";

        var fdfWndFo = document.querySelector('.d-four-wind');
        fdfWndFo.innerText = "Wind Speed: " + wndSpdFD4 + " mph";

        console.log(tempDegFD5);
        console.log(iconWthrFD5);
        console.log(humidAmntFD5);
        console.log(wndSpdFD5);

        var fdfIconFi = document.querySelector('.d-five-icon');
        fdfIconFi.innerText = iconWthrFD5;

        var fdfTempFi = document.querySelector('.d-five-temp');
        fdfTempFi.innerText = "Temperature: " + tempDegFD5 + " degrees";

        var fdfHumFi = document.querySelector('.d-five-hum');
        fdfHumFi.innerText = "Humidity Level: " + humidAmntFD5 + " percent";

        var fdfWndFi = document.querySelector('.d-five-wind');
        fdfWndFi.innerText = "Wind Speed: " + wndSpdFD5 + " mph";
        })
    });
   
    });
});
  });

  
