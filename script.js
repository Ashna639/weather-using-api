let btn = document.getElementById('btn')
let search = document.getElementById('input')
let weather = document.getElementById('weather')
let data

function getCoordinates(){
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${search.value}`)
    .then(res => res.json())
    .then(data => {
        const latitude = data.results[0].latitude;
        const longitude = data.results[0].longitude
        console.log(latitude);
        console.log(longitude);
        getweather(latitude,longitude);
    })
    
}

btn.addEventListener('click',getCoordinates);

function getweather(lat,long){
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`)
    .then(res => res.json())
    .then(data => {
    const temp = data.current_weather.temperature;
    weather.innerText = `The temperature is ${temp}°C`
    console.log(temp)
    })
}
