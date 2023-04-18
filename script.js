//Capture User Input
//Make search button clickable
//Add user input to local storage when submitted
//Append user input with auto locations
//Fetch weather api url
//

var today = dayjs().format('MMM DD, YYYY')
$('#date').text(today);

var submitBtn = document.querySelector('.submit');


  submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    
    var savedL = document.getElementById('savedlctns');
    var newBtn = document.createElement('button');
    newBtn.classList.add("autolctn");
    newBtn.innerText = document.getElementById("input").value;

    savedL.append(newBtn);
    console.log(input.value);
    localStorage.setItem("input.value", JSON.stringify(input.value));
    input.value = '';
   
    $(function getLatLon() {
        
        var requestUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + newBtn.innerText + "&limit=1&appid=dcb4a51f4037e4402071e03b0811d2ca";
  
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
        var iconWthr = responseC.weather[0].icon;
        var humidAmnt = responseC.main.humidity;
        var wndSpd = responseC.wind.speed;

        console.log(cityName);
        console.log(tempDeg);
        console.log(iconWthr);
        console.log(humidAmnt);
        console.log(wndSpd);

        var cwCity = document.querySelector('.city-name');
        cwCity.innerText = cityName;

        var icon = "https://openweathermap.org/img/w/" + iconWthr + ".png";
        $('#weather-icon').attr('src', icon);

        var cwTemp = document.querySelector('.city-temp');
        cwTemp.innerText = "Current Temperature: " + tempDeg + " degrees";

        var cwHum = document.querySelector('.humidity');
        cwHum.innerText = "Humidity Levels: " + humidAmnt + " Percent";

        var cwWnd = document.querySelector('.wind-speed');
        cwWnd.innerText = "Wind Speed: " + wndSpd + " MPH";


        var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=dcb4a51f4037e4402071e03b0811d2ca"
    
        $.ajax({
            url: fiveDayUrl,
            method: "GET"
        }).then(function(responseF){
            
            console.log(responseF);
        
        //var cityNameF = responseF.city.name;
        var tempDegFD1 = responseF.list[1].main.temp;
        var iconWthrFD1 = responseF.list[1].weather[0].icon;
        var humidAmntFD1 = responseF.list[1].main.humidity;
        var wndSpdFD1 = responseF.list[1].wind.speed;

        var tempDegFD2 = responseF.list[9].main.temp;
        var iconWthrFD2 = responseF.list[9].weather[0].icon;
        var humidAmntFD2 = responseF.list[9].main.humidity;
        var wndSpdFD2 = responseF.list[9].wind.speed;

        var tempDegFD3 = responseF.list[17].main.temp;
        var iconWthrFD3 = responseF.list[17].weather[0].icon;
        var humidAmntFD3 = responseF.list[17].main.humidity;
        var wndSpdFD3 = responseF.list[17].wind.speed;

        var tempDegFD4 = responseF.list[25].main.temp;
        var iconWthrFD4 = responseF.list[25].weather[0].icon;
        var humidAmntFD4 = responseF.list[25].main.humidity;
        var wndSpdFD4 = responseF.list[25].wind.speed;

        var tempDegFD5 = responseF.list[33].main.temp;
        var iconWthrFD5 = responseF.list[33].weather[0].icon;
        var humidAmntFD5 = responseF.list[33].main.humidity;
        var wndSpdFD5 = responseF.list[33].wind.speed;

        //console.log(cityNameF);
        console.log(tempDegFD1);
        console.log(iconWthrFD1);
        console.log(humidAmntFD1);
        console.log(wndSpdFD1);

        var fdfIconO = "https://openweathermap.org/img/w/" + iconWthrFD1 + ".png";
        $('#d-one-icon').attr('src', fdfIconO);

        var fdfTempO = document.querySelector('.d-one-temp');
        fdfTempO.innerText = "Temperature: " + tempDegFD1 + " Degrees";

        var fdfHumO = document.querySelector('.d-one-hum');
        fdfHumO.innerText = "Humidity Level: " + humidAmntFD1 + " Percent";

        var fdfWndO = document.querySelector('.d-one-wind');
        fdfWndO.innerText = "Wind Speed: " + wndSpdFD1 + " mph";

        console.log(tempDegFD2);
        console.log(iconWthrFD2);
        console.log(humidAmntFD2);
        console.log(wndSpdFD2);

        var fdfIconTw = "https://openweathermap.org/img/w/" + iconWthrFD2 + ".png";
        $('#d-two-icon').attr('src', fdfIconTw);

        var fdfTempTw = document.querySelector('.d-two-temp');
        fdfTempTw.innerText = "Temperature: " + tempDegFD2 + " Degrees";

        var fdfHumTw = document.querySelector('.d-two-hum');
        fdfHumTw.innerText = "Humidity Level: " + humidAmntFD2 + " Percent";

        var fdfWndTw = document.querySelector('.d-two-wind');
        fdfWndTw.innerText = "Wind Speed: " + wndSpdFD2 + " mph";

        console.log(tempDegFD3);
        console.log(iconWthrFD3);
        console.log(humidAmntFD3);
        console.log(wndSpdFD3);

        var fdfIconTh = "https://openweathermap.org/img/w/" + iconWthrFD3 + ".png";
        $('#d-thr-icon').attr('src', fdfIconTh);

        var fdfTempTh = document.querySelector('.d-thr-temp');
        fdfTempTh.innerText = "Temperature: " + tempDegFD3 + " Degrees";

        var fdfHumTh = document.querySelector('.d-thr-hum');
        fdfHumTh.innerText = "Humidity Level: " + humidAmntFD3 + " Percent";

        var fdfWndTh = document.querySelector('.d-thr-wind');
        fdfWndTh.innerText = "Wind Speed: " + wndSpdFD3 + " mph";

        console.log(tempDegFD4);
        console.log(iconWthrFD4);
        console.log(humidAmntFD4);
        console.log(wndSpdFD4);

        var fdfIconFo = "https://openweathermap.org/img/w/" + iconWthrFD4 + ".png";
        $('#d-four-icon').attr('src', fdfIconFo);

        var fdfTempFo = document.querySelector('.d-four-temp');
        fdfTempFo.innerText = "Temperature: " + tempDegFD4 + " Degrees";

        var fdfHumFo = document.querySelector('.d-four-hum');
        fdfHumFo.innerText = "Humidity Level: " + humidAmntFD4 + " Percent";

        var fdfWndFo = document.querySelector('.d-four-wind');
        fdfWndFo.innerText = "Wind Speed: " + wndSpdFD4 + " mph";

        console.log(tempDegFD5);
        console.log(iconWthrFD5);
        console.log(humidAmntFD5);
        console.log(wndSpdFD5);

        var fdfIconFi = "https://openweathermap.org/img/w/" + iconWthrFD5 + ".png";
        $('#d-five-icon').attr('src', fdfIconFi);

        var fdfTempFi = document.querySelector('.d-five-temp');
        fdfTempFi.innerText = "Temperature: " + tempDegFD5 + " Degrees";

        var fdfHumFi = document.querySelector('.d-five-hum');
        fdfHumFi.innerText = "Humidity Level: " + humidAmntFD5 + " Percent";

        var fdfWndFi = document.querySelector('.d-five-wind');
        fdfWndFi.innerText = "Wind Speed: " + wndSpdFD5 + " mph";
        })
    });
   
    });
});
  });




$(function getLatLon() {
    
    $(".autolctn").on("click", function(){
        console.log(this);
        var autoText = this.innerText;
        console.log(autoText);
    var requestUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + autoText + "&limit=1&appid=dcb4a51f4037e4402071e03b0811d2ca";

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
    var iconWthr = responseC.weather[0].icon;
    var humidAmnt = responseC.main.humidity;
    var wndSpd = responseC.wind.speed;

    console.log(cityName);
    console.log(tempDeg);
    console.log(iconWthr);
    console.log(humidAmnt);
    console.log(wndSpd);

    var cwCity = document.querySelector('.city-name');
    cwCity.innerText = cityName;

    var icon = "https://openweathermap.org/img/w/" + iconWthr + ".png";
    $('#weather-icon').attr('src', icon);

    var cwTemp = document.querySelector('.city-temp');
    cwTemp.innerText = "Current Temperature: " + tempDeg + " degrees";

    var cwHum = document.querySelector('.humidity');
    cwHum.innerText = "Humidity Levels: " + humidAmnt + " Percent";

    var cwWnd = document.querySelector('.wind-speed');
    cwWnd.innerText = "Wind Speed: " + wndSpd + " MPH";


    var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=dcb4a51f4037e4402071e03b0811d2ca"

    $.ajax({
        url: fiveDayUrl,
        method: "GET"
    }).then(function(responseF){
        
        console.log(responseF);
    
    //var cityNameF = responseF.city.name;
    var tempDegFD1 = responseF.list[1].main.temp;
    var iconWthrFD1 = responseF.list[1].weather[0].icon;
    var humidAmntFD1 = responseF.list[1].main.humidity;
    var wndSpdFD1 = responseF.list[1].wind.speed;

    var tempDegFD2 = responseF.list[9].main.temp;
    var iconWthrFD2 = responseF.list[9].weather[0].icon;
    var humidAmntFD2 = responseF.list[9].main.humidity;
    var wndSpdFD2 = responseF.list[9].wind.speed;

    var tempDegFD3 = responseF.list[17].main.temp;
    var iconWthrFD3 = responseF.list[17].weather[0].icon;
    var humidAmntFD3 = responseF.list[17].main.humidity;
    var wndSpdFD3 = responseF.list[17].wind.speed;

    var tempDegFD4 = responseF.list[25].main.temp;
    var iconWthrFD4 = responseF.list[25].weather[0].icon;
    var humidAmntFD4 = responseF.list[25].main.humidity;
    var wndSpdFD4 = responseF.list[25].wind.speed;

    var tempDegFD5 = responseF.list[33].main.temp;
    var iconWthrFD5 = responseF.list[33].weather[0].icon;
    var humidAmntFD5 = responseF.list[33].main.humidity;
    var wndSpdFD5 = responseF.list[33].wind.speed;

    //console.log(cityNameF);
    console.log(tempDegFD1);
    console.log(iconWthrFD1);
    console.log(humidAmntFD1);
    console.log(wndSpdFD1);

    var fdfIconO = "https://openweathermap.org/img/w/" + iconWthrFD1 + ".png";
    $('#d-one-icon').attr('src', fdfIconO);

    var fdfTempO = document.querySelector('.d-one-temp');
    fdfTempO.innerText = "Temperature: " + tempDegFD1 + " Degrees";

    var fdfHumO = document.querySelector('.d-one-hum');
    fdfHumO.innerText = "Humidity Level: " + humidAmntFD1 + " Percent";

    var fdfWndO = document.querySelector('.d-one-wind');
    fdfWndO.innerText = "Wind Speed: " + wndSpdFD1 + " mph";

    console.log(tempDegFD2);
    console.log(iconWthrFD2);
    console.log(humidAmntFD2);
    console.log(wndSpdFD2);

    var fdfIconTw = "https://openweathermap.org/img/w/" + iconWthrFD2 + ".png";
    $('#d-two-icon').attr('src', fdfIconTw);

    var fdfTempTw = document.querySelector('.d-two-temp');
    fdfTempTw.innerText = "Temperature: " + tempDegFD2 + " Degrees";

    var fdfHumTw = document.querySelector('.d-two-hum');
    fdfHumTw.innerText = "Humidity Level: " + humidAmntFD2 + " Percent";

    var fdfWndTw = document.querySelector('.d-two-wind');
    fdfWndTw.innerText = "Wind Speed: " + wndSpdFD2 + " mph";

    console.log(tempDegFD3);
    console.log(iconWthrFD3);
    console.log(humidAmntFD3);
    console.log(wndSpdFD3);

    var fdfIconTh = "https://openweathermap.org/img/w/" + iconWthrFD3 + ".png";
    $('#d-thr-icon').attr('src', fdfIconTh);

    var fdfTempTh = document.querySelector('.d-thr-temp');
    fdfTempTh.innerText = "Temperature: " + tempDegFD3 + " Degrees";

    var fdfHumTh = document.querySelector('.d-thr-hum');
    fdfHumTh.innerText = "Humidity Level: " + humidAmntFD3 + " Percent";

    var fdfWndTh = document.querySelector('.d-thr-wind');
    fdfWndTh.innerText = "Wind Speed: " + wndSpdFD3 + " mph";

    console.log(tempDegFD4);
    console.log(iconWthrFD4);
    console.log(humidAmntFD4);
    console.log(wndSpdFD4);

    var fdfIconFo = "https://openweathermap.org/img/w/" + iconWthrFD4 + ".png";
    $('#d-four-icon').attr('src', fdfIconFo);

    var fdfTempFo = document.querySelector('.d-four-temp');
    fdfTempFo.innerText = "Temperature: " + tempDegFD4 + " Degrees";

    var fdfHumFo = document.querySelector('.d-four-hum');
    fdfHumFo.innerText = "Humidity Level: " + humidAmntFD4 + " Percent";

    var fdfWndFo = document.querySelector('.d-four-wind');
    fdfWndFo.innerText = "Wind Speed: " + wndSpdFD4 + " mph";

    console.log(tempDegFD5);
    console.log(iconWthrFD5);
    console.log(humidAmntFD5);
    console.log(wndSpdFD5);

    var fdfIconFi = "https://openweathermap.org/img/w/" + iconWthrFD5 + ".png";
    $('#d-five-icon').attr('src', fdfIconFi);

    var fdfTempFi = document.querySelector('.d-five-temp');
    fdfTempFi.innerText = "Temperature: " + tempDegFD5 + " Degrees";

    var fdfHumFi = document.querySelector('.d-five-hum');
    fdfHumFi.innerText = "Humidity Level: " + humidAmntFD5 + " Percent";

    var fdfWndFi = document.querySelector('.d-five-wind');
    fdfWndFi.innerText = "Wind Speed: " + wndSpdFD5 + " mph";
    })
});

});
});
}

);