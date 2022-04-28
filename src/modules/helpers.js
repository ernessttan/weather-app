const fromUnixTime = require('date-fns/fromUnixTime');

function formatTemperature(temperature) {
  return `${Math.round(temperature)}°`;
}

function formatDate(unixDate) {
  return fromUnixTime(unixDate);
}

function formatHumidity(humidity) {
  return `${humidity}%`;
}

function formatSpeed(speed, unit) {
  if (unit === 'imperial') {
    return `${speed} mi/hour`;
  } if (unit === 'metric') {
    return `${speed} m/sec`;
  }
}

export {
  formatTemperature, formatDate, formatHumidity, formatSpeed,
};
