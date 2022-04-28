import weather from './weather';
import { createElement } from '../domUtils';

const main = document.querySelector('main');

async function displayWeather(city, unit) {
  main.innerHTML = '';
  const weatherData = await weather.getData(city, unit);

  const weatherInfo = createElement('div', { id: 'weatherInfo', class: 'container-column' });
  weatherInfo.innerHTML = `
  <div class='container-row' id='conditionInfo'>
    <img src='https://openweathermap.org/img/wn/${weatherData.icon}.png'>
    <h1>${weatherData.description}</h1>
  </div>
  <h1 id='weatherTemp'>${weatherData.temp}</h1>
  <div class='container-row' id='cityInfo'>
    <h2 id='city' >${weatherData.city}</h2>
    <i class="fa-solid fa-lg fa-location-dot"></i>
  </div>
  `;
  main.append(weatherInfo);

  const extraInfo = createElement('div', { id: 'extraInfo', class: 'container-column' });
  extraInfo.innerHTML = `
    <div class='container-row gap-10'>
      <p>${weatherData.maxTemp}/${weatherData.minTemp}</p>
      <p>Feels Like ${weatherData.feelsLike}</p>
    </div>
    <p>${weatherData.date}</p>
  `;
  main.append(extraInfo);

  const weatherDetails = createElement('div', { id: 'weatherDetails', class: 'container-row' });
  weatherDetails.innerHTML = `
  <div id='humidity' class='detail-wrapper'>
    <h3>${weatherData.humidity}</h3>
    <p>Humidity</p>
  </div>
  <div id='windSpeed' class='detail-wrapper'>
    <h3>${weatherData.windSpeed}</h3>
    <p>Wind Speed</p>
  </div>  
  <div id='pressure' class='detail-wrapper'>
    <h3>${weatherData.pressure}</h3>
    <p>Pressure</p>
  </div>
  `;
  main.append(weatherDetails);
}

export default displayWeather;
