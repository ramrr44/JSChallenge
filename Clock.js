const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  const hours = String(date.getHours()).padStart(2,"0"); // padStart 는 자리수를 채워주는 역활을한다. 
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;

}

getClock();
setInterval(getClock, 1000);