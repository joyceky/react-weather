import axios from 'axios';

const API_KEY = '73bf72fba4e91a2acaac53d15fc68608';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  const request = axios.get(url);
  // request.then(function(result) {
     // console.log("Response Data in Action: ", result.data);
  // });

  return {
     type: FETCH_WEATHER,
     payload: request
   };
}
