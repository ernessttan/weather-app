const fromUnixTime = require('date-fns/fromUnixTime');

function formatTemperature(temperature) {
  return `${Math.round(temperature)}°`;
}

function formatDate(unixDate) {
  return fromUnixTime(unixDate);
}

export { formatTemperature, formatDate };
