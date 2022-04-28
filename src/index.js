import css from './style.css';
import weather from './modules/weather';
import displayWeather from './modules/view';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

document.addEventListener('DOMContentLoaded', () => {
  displayWeather('New York', 'metric');

  const toggleSwitch = document.querySelector('input[type=checkbox]');
  toggleSwitch.addEventListener('change', () => {
    const city = document.querySelector('#city');
    if (toggleSwitch.checked) {
      displayWeather(city.textContent, 'imperial');
    } else {
      displayWeather(city.textContent, 'metric');
    }
  });

  const searchButton = document.querySelector('.search-btn');
  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const citySearch = document.querySelector('#citySearch');
    displayWeather(citySearch.value, 'metric');
    citySearch.value = '';
  });
});
