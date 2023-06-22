const apiKey = "45131a06c136e6a3e9a287575331aa01";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&unit=metric&q=dhaka";

async function checkWeather ( ){
    const response =await fetch(apiUrl+`&appid=$(apiKey)`);
    var data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp;
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = data.wind.speed;

}
checkWeather ( )