import { fromUnixTime, format } from 'date-fns';
import { formatTemperature, formatHumidity, formatSpeed } from './helpers';

const weather = (() => {
  function parseData(data, unit) {
    const processedData = {
      city: data.name,
      country: data.sys.country,
      temp: formatTemperature(data.main.temp),
      feelsLike: formatTemperature(data.main.feels_like),
      maxTemp: formatTemperature(data.main.temp_max),
      minTemp: formatTemperature(data.main.temp_min),
      icon: data.weather[0].icon,
      description: data.weather[0].description,
      date: format(fromUnixTime(data.dt), 'eeee, HH:mm'),
      windSpeed: formatSpeed(data.wind.speed, unit),
      humidity: formatHumidity(data.main.humidity),
      pressure: `${data.main.pressure} hPa`,
    };
    return processedData;
  }

  async function getData(city, unit) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e4f1826af20c614acaafb4da746e7af&units=${unit}`,
        { mode: 'cors' },
      );
      // Returns a promise
      const data = await response.json();
      return parseData(data, unit);
    } catch (error) {
      return 'Error';
    }
  }

  return {
    getData,
    parseData,
  };
})();

export default weather;
