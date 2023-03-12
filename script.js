//Get search text and button fields

const searchBtnEl1 = document.querySelector('#search-btn');
const textFieldEl1 = document.querySelector('#inputCity4');
const apiKey = "0f8c5edfd385fc9a2cb1d6b9145a210a";





const getGeoCode = function(requestUrl) {

    fetch(requestUrl)
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

}
  
const getCurrentWeather = function (data) {

}


const getFutureWeatherForecast = function (data) {


}

const getWeatherForecast= function (event) {

    event.preventDefault();

    let name = textFieldEl1.value.trim();
    let limit = 5;
    let geoCodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=${limit}&appid=${apiKey}&units=imperial`;
    let currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=imperial`;
   // let weatherForecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`; 
    let weatherIconURL = `https://openweathermap.org/img/wn/10d@2x.png`;

     getGeoCode(geoCodeURL);

     /*
     .then( function(data) {
         
     let lat = data[0]['lat'];
     let lon = data[0]['lon'];   

    

        fetch(weatherForecastURL)
        .then(function (response) 
        {
            if (response.status === 200) 
            {
              response.textContent = response.status;
            };
            
              return response.json();      
        })
        .then(function(data) {
            console.log(data)
            return data;
        }).catch(function(err) {
            console.log(err);
        });

        
     });

 */
     
};






searchBtnEl1.addEventListener('click', getWeatherForecast);