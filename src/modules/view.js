import weather from './weather';
import { createElement } from '../domUtils';

const main = document.querySelector('main');

async function displayWeather() {
  const weatherData = await weather.getData('New York');

  const weatherInfo = createElement('div', { id: 'weatherInfo' });
  weatherInfo.innerHTML = `
  <div class='container-row' id='conditionInfo'>
  <img src='https://openweathermap.org/img/wn/${weatherData.icon}.png'>
  <h2>${weatherData.description}</h2>
  </div>
  <h2 id='weatherTemp'>${weatherData.temp}</h2>
  <div class='container-row' id='cityInfo'>
  <h2>${weatherData.city}</h2>
  <i class="fa-solid fa-lg fa-location-dot"></i>
  </div>
  `;
  main.append(weatherInfo);

  const extraInfo = createElement('div', { id: 'extraInfo' });
  extraInfo.innerHTML = `
  <div>
    <p>${weatherData.maxTemp}/${weatherData.minTemp}</p>
    <p>${weatherData.date}</p>
  </div>
  `;
  main.append(extraInfo);
}

export default displayWeather;
