//Get search text and button fields

const searchBtnEl1 = document.querySelector('#search-btn');
const textFieldEl1 = document.querySelector('#inputCity4');

const getCoordinates = function {


};


const getWeatherForecast = function (event) {

    event.preventDefault();

    let city = textFieldEl1.value.trim();
    let coords = getCoordinates(city);


    console.log(textFieldEl1.value.trim());



};






searchBtnEl1.addEventListener('click', getWeatherForecast);