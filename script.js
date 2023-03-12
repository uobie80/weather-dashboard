//Get search text and button fields

const searchBtnEl1 = document.querySelector('#search-btn');
const textFieldEl1 = document.querySelector('#inputCity4');
const apiKey = "0f8c5edfd385fc9a2cb1d6b9145a210a";
const currentWeatherDiv = document.querySelector('.curr-weather-content');
const futureForecastDiv = document.querySelector('.future-weather-forecast');
const searchHistoryDiv = document.querySelector('.search-history');


const getWeatherDetails = function(event) {

event.preventDefault();
let city = event.target.getAttribute("data-city")
getCurrentWeather(city);

}

const getFutureWeatherForecast = function (lat, lon, city) {  
   
    let weatherForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`; 

const weatherForecast = fetch(weatherForecastURL)
                        .then(function (response) 
                                {
                                    if (!response.status === 200) 
                                    {
                                        response.statusText = response.status;
                                    throw new Error(response.statusText);
                                    };
                                    
                                    return response.json();      
                                })
                                .then(function(data) {
                                    
                                    return data;
                                }).catch(function(err) {
                                    console.log(err);
                                });

        weatherForecast.then(function(data) {
          
         futureForecastDiv.innerHTML = "<div class=card-deck'><h5>5 Day Forecast</h5>" +  data.list.map((item, index) => { 
              console.log(item)
            
            let speed = item.wind.speed;
            let humidity = item.main.humidity;
            let temp = item.main.temp;
            let dt = new Date(item.dt * 1000);
            let date = `${(dt.getMonth() + 1) + "/" +  dt.getDate() + "/" + dt.getFullYear()}`
            let icon = item.weather[0].icon;
            let weatherIconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;

              
                 if (index === 0) {
                    return `<div class="card mb-4 shadow-sm text-white bg-secondary future-weather-card" style="margin-right: 10px; width: 12rem; height: auto; float:left">
                    <img src="${weatherIconURL}" class="card-img-top" alt="weather icon" style="width: 5rem; height: 5rem;">
                       <div class="card-body">
                       <h5 class="card-title">${city}</h5>
                       <h5 class="card-title">${date}</h5>
                       <p class="card-text">Temp: ${temp} <span>&#8457;</span></p>
                     <p class="card-text">Wind: ${speed} MPH</p>
                     <p class="card-text">Humidity: ${humidity} %</p>  
                    </div>
                   </div>
                  `;
                 } else if (index === 8) {
                    return `<div class="card  mb-4 shadow-sm text-white bg-secondary future-weather-card" style="margin-right: 10px; width: 12rem; height: auto; float:left">
                    <img src="${weatherIconURL}" class="card-img-top" alt="weather icon" style="width: 5rem; height: 5rem;">
                       <div class="card-body">
                       <h5 class="card-title">${city}</h5>
                       <h5 class="card-title">${date}</h5>
                       <p class="card-text">Temp: ${temp} <span>&#8457;</span></p>
                     <p class="card-text">Wind: ${speed} MPH</p>
                     <p class="card-text">Humidity: ${humidity} %</p>  
                    </div>
                   </div>
                  `;
                 } else if (index === 16) {
                    return `<div class="card mb-4 shadow-sm text-white bg-secondary future-weather-card" style="margin-right: 10px; width: 12rem; height: auto; float:left">
                    <img src="${weatherIconURL}" class="card-img-top" alt="weather icon" style="width: 5rem; height: 5rem;">
                       <div class="card-body">
                       <h5 class="card-title">${city}</h5>
                       <h5 class="card-title">${date}</h5>
                       <p class="card-text">Temp: ${temp} <span>&#8457;</span></p>
                     <p class="card-text">Wind: ${speed} MPH</p>
                     <p class="card-text">Humidity: ${humidity} %</p>  
                    </div>
                   </div>
                  `;
                 } else if (index === 24){
                    return `<div class="card mb-4 shadow-sm text-white bg-secondary future-weather-card" style="margin-right: 10px; width: 12rem; height: auto; float:left">
                    <img src="${weatherIconURL}" class="card-img-top" alt="weather icon" style="width: 5rem; height: 5rem;">
                       <div class="card-body">
                       <h5 class="card-title">${city}</h5>
                       <h5 class="card-title">${date}</h5>
                       <p class="card-text">Temp: ${temp} <span>&#8457;</span></p>
                     <p class="card-text">Wind: ${speed} MPH</p>
                     <p class="card-text">Humidity: ${humidity} %</p>  
                    </div>
                   </div>
                  `;
                 } else if (index === 32){
                    return `<div class="card mb-4 shadow-sm text-white bg-secondary future-weather-card" style="margin-right: 10px; width: 12rem; height: auto; float:left">
                    <img src="${weatherIconURL}" class="card-img-top" alt="weather icon" style="width: 5rem; height: 5rem;">
                       <div class="card-body">
                       <h5 class="card-title">${city}</h5>
                       <h5 class="card-title">${date}</h5>
                       <p class="card-text">Temp: ${temp} <span>&#8457;</span></p>
                     <p class="card-text">Wind: ${speed} MPH</p>
                     <p class="card-text">Humidity: ${humidity} %</p>  
                    </div>
                   </div>
                  `;
                 }
               
                }).join('') + "</div>";

        });




}

const getCurrentWeather = function (city_name) {

    let currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}&units=imperial`;

const currentWeather = fetch(currentWeatherURL)
                        .then(function (response) 
                                {
                                    if (!response.status === 200) 
                                    {
                                        response.statusText = response.status;
                                    throw new Error(response.statusText);
                                    };
                                    
                                    return response.json();      
                                })
                                .then(function(data) {
                                    
                                    return data;
                                }).catch(function(err) {
                                    console.log(err);
                                });

        currentWeather.then(function(data) {
            let lat = data.coord.lat;
            let lon = data.coord.lon;
            let dt = new Date(data.dt * 1000);
            let date = `${(dt.getMonth() + 1) + "/" +  dt.getDate() + "/" + dt.getFullYear()}`
            let icon = data.weather[0].icon;
            let temp = data.main.temp;
            let humidity = data.main.humidity;
            let speed = data.wind.speed;
            let city = data.name;
            let weatherIconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            console.log(lat, lon, city, date, icon, temp, humidity, speed, weatherIconURL);
              let coords = JSON.stringify({lat, lon});
           
            let pEl1 = document.createElement('p');
            let buttonEl1 = document.createElement('input');

            buttonEl1.setAttribute('type', 'button');
            buttonEl1.setAttribute('class', 'inputSearchHistory');
            buttonEl1.setAttribute('name', 'inputSearchHistory');
            buttonEl1.setAttribute('value', city);
            buttonEl1.setAttribute('data-city', city);
            buttonEl1.setAttribute('data-coord', coords);
            buttonEl1.setAttribute("style", "width: 12rem; margin: 0px");

            let cityExists = localStorage.getItem(city);
            console.log(cityExists);
            if(!cityExists){
            buttonEl1.addEventListener('click', getWeatherDetails);
            pEl1.appendChild(buttonEl1);
            searchHistoryDiv.appendChild(pEl1);
            }
            localStorage.setItem(city, city);
            html = `<div class="card mb-4 shadow-sm text-white bg-secondary curr-weather-card" style="width: 20rem; height: auto">
                     <img src="${weatherIconURL}" class="card-img-top" alt="weather icon " style="width: 5rem; height: 5rem;">
                     <div class="card-body">
                      <h5 class="card-title">${city}</h5>
                      <h5 class="card-title">${date}</h5>
                      <p class="card-text">Temp: ${temp} <span>&#8457;</span></p>
                      <p class="card-text">Wind: ${speed} MPH</p>
                      <p class="card-text">Humidity: ${humidity} %</p>
                      
                    </div>
                   </div>
                   `

                   currentWeatherDiv.innerHTML = html;
                   getFutureWeatherForecast(lat, lon, city);
        
        });

}

const getWeatherForecast = function (event) {

    event.preventDefault();

    let city = textFieldEl1.value.trim();

     getCurrentWeather(city);
     
     
};


searchBtnEl1.addEventListener('click', getWeatherForecast);