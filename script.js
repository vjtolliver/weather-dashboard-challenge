//Capture User Input
//Make search button clickable
//Add user input to local storage when submitted
//Append user input with auto locations
//Fetch weather api url
//

var submitBtn = document.querySelector('.submit');
//var userInput = document.getElementById('input').value;

function getLatLon() {
    var requestUrl = '';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Use the console to examine the response
        console.log(data);
        // TODO: Loop through the data and generate your HTML
        for (var i = 0; i < data.length; i++) {
          var loginName = document.createElement('p');
          var gitProfile = document.createElement('p');
          loginName.textContent = data[i].login;
          gitProfile.textContent = data[i].url;
  
          userContainer.append(loginName);
          userContainer.append(gitProfile);
        }
      });
  }
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
    getLatLon
  });
  