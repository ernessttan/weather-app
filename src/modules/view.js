import weather from './weather';
import { createElement } from '../domUtils';

const main = document.querySelector('main');

async function displayWeather() {
  const weatherData = await weather.getData('New York');

  const weatherInfo = createElement('div', { id: 'weatherInfo' });
  weatherInfo.innerHTML = `
  <h1>${weatherData.city}</h1>
  `;
  main.append(weatherInfo);
}

export default displayWeather;
