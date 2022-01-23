const API_KEY = "945b343b27f1bfa70cc0a03b119d5cfb";


function onGeoOk(position){
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  
  fetch(url).then((response)=> response.json())
  .then((data)=> 
  {
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");
  city.innerText = data.name; 
  weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;}); // ` 백틱과 ${} 사용해서 날씨와 온도넣어줌
  //console.log(url);
}

function onGeoError(){
  alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 석세스일때 오케이를, 에러일때는 에러를. 콜백 함수 

