//Get search text and button fields

const searchBtnEl1 = document.querySelector('#search-btn');
const textFieldEl1 = document.querySelector('#inputCity4');
const apiKey = "0f8c5edfd385fc9a2cb1d6b9145a210a";

 
let weatherIconURL = `https://openweathermap.org/img/wn/10d@2x.png`;


const getFutureWeatherForecast = function (lat, lon) {  
   
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
        console.log(data);  //getFutureWeatherForecas(lat, lon) Modify to call function to render HTML code here
        });




}

const getCurrentWeather = function () {
    let city_name = textFieldEl1.value.trim();
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
        console.log(data);  // Modify to call function to render HTML code here
        });

}

const getWeatherForecast= function (event) {

    event.preventDefault();

     getCurrentWeather();
     
     
};


searchBtnEl1.addEventListener('click', getWeatherForecast);