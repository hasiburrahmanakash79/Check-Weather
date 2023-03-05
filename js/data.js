const API_KEY = `c1d04d1b58110b37e1f993fe9af894a1`

const loadWeatherData = (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeatherData(data))
}
const displayWeatherData = data =>{
    const temp = document.getElementById('temperature')
    temp.innerText = data.main.temp

    const weather =document.getElementById('weather')
    weather.innerText = data.weather[0].main
}

document.getElementById('BTN-search').addEventListener('click',function(){
    
    const searchField = document.getElementById('search-city')
    const city = searchField.value 
    document.getElementById('city-name').innerText = city;
    loadWeatherData(city)
})

loadWeatherData()