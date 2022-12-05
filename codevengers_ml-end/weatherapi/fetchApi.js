const API_KEY="31f0e986eee1c63961f0a72495f3b646"

const Weather_URL=`https://api.openweathermap.org/data/2.5/weather?lat=17.384&lon=78.4564&appid=${API_KEY}&units=metric`;

fetch(Weather_URL)
  .then((response) => response.json())
  .then((data) => console.log(data));