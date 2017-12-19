import {Alert} from 'react-native';
const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEM = "https://api.openweathermap.org/data/2.5/weather?";
const CITY_NOT_FOUND = "404";

function zipUrl(zip) {
  return `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast(zip) {
  return fetch(zipUrl(zip))
    .then(response => response.json())
    .then(responseJSON => {
      if (responseJSON.cod === CITY_NOT_FOUND ) {
          Alert.alert('City Not Found,Enter A valid Zip');
          return null;
      }else {
        return {
          main: responseJSON.weather[0].main,
          description: responseJSON.weather[0].description,
          temp: responseJSON.main.temp
        };
      }
    })
    .catch(error => {
      console.error(error);
    });
}

export default { fetchForecast: fetchForecast };
