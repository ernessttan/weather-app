import css from './style.css';
import weather from './modules/weather';
import displayWeather from './modules/view';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

document.addEventListener('DOMContentLoaded', () => {
  displayWeather();
});
