const weather = (() => {
  function parseData(data) {
    const processedData = {
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
    };
    return processedData;
  }

  async function getData(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7e4f1826af20c614acaafb4da746e7af&units=imperial`,
        { mode: 'cors' },
      );
      // Returns a promise
      const data = await response.json();
      console.log(data);
      return parseData(data);
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
