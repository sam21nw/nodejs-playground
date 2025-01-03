// const API_KEY = '57fb29200073c9747a8301edc2217b6f';
// const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
// const city = "Sogndal";

// async function getWeather(): Promise<void> {
//     const weatherResponse = await fetch(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);
//     const weatherData = await weatherResponse.json();
//     console.log(weatherData.main.temp);
// }

// getWeather();

// https://api.openweathermap.org/data/2.5/weather?q=Sogndal&appid=57fb29200073c9747a8301edc2217b6f&units=metric

async function getName(url: string) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data[0].name);
}

getName("http://localhost:3000/weather");