//const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("button");
const greeting = document.querySelector("#greeting"); // id 에는 # 을 붙인다?? 
const USERNAME_KEY = "inputValue"
const HIDDEN_NAME = "hidden"
// function onLoginButtonClick(){
//   console.log("WhattaUp!", loginInput.value);
//   console.log("click!");
// }
const link = document.querySelector("a");

function onLoginSubmit(event){
  event.preventDefault();  // 브라우저가 기본적으로하는 기능을 멈춤, 기본기능이 새로고침이란다. 원하는기능을 구현하기위해 설정
  loginForm.classList.add(HIDDEN_NAME); // 로그인 폼 영역에다가 히든네임 클래스를 추가, 히든클래스는 CSS에 생성해놓음
  const inputValue = loginInput.value;

  console.log(USERNAME_KEY);
  localStorage.setItem(USERNAME_KEY, inputValue);
  //greeting.innerText = "Hello" + userName;
  paintGreetings(inputValue);
}

// function onLoginButtonClick(){
//   const userName = loginInput.value; 
//   console.log(userName);
// }
loginForm.addEventListener("submit", onLoginSubmit)
loginButton.addEventListener("click", onLoginSubmit);

const savedName = localStorage.getItem(USERNAME_KEY);

function paintGreetings(inputValue){
  greeting.innerText = `Hello ${inputValue}!! `;
  greeting.classList.remove(HIDDEN_NAME);
}
  
if(savedName == null){
  loginForm.classList.remove(HIDDEN_NAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  } 
else {
    paintGreetings(savedName);
  }

