const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const SAVE_KEY = "todos";

let toDos = [];  // const toDos 와 다르게 렛으로 하면 추가되는 어레이에도 반응할 수 있다. 

function saveToDos(){
  localStorage.setItem(SAVE_KEY, JSON.stringify(toDos)); // key 값 value 값으로 입력, 키값에는 ""가 들어간다. 
}

function deleteToDo(event){
  const Li = event.target.parentElement; //button클릭시 해당메서드가 실행, 즉 이벤트의타켓은 button, button의 부모요소는 li. 
  console.log(typeof Li.id);
  Li.remove();
  toDos = toDos.filter((tt) => tt.id != parseInt(Li.id)); //여기서 tt는 그냥 filter안의 변수야 내가마음대로 정할수있는. 해당필터는 어레이
  saveToDos(); // toDos 의 지시를 받는 필터이므로 해당어레이의 조건에 맞는 것을 필터링하게됨, 그 조건이 Li.id 와 맞지않는것을 찾아라. 
}

function paintToDo(newToDo){
  const Li = document.createElement("li");
  Li.id = newToDo.id;
  const span = document.createElement("span");
  const button = document.createElement("button"); 
  span.innerText = newToDo.text; // ??<< 그냥위에 함수의 아규먼트,변수로 newToDo가와서 이렇게 쓴거다. 
  
  button.innerText = "X"; 
  button.addEventListener("click", deleteToDo);

  Li.appendChild(span);
  Li.appendChild(button);
  toDoList.appendChild(Li); 

}


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = ""; // 인풋값을 입력하게되면, 엔터치고난 후 인풋이 공백으로 바뀌게된다. 
    const newToDoObj = {
      text : newToDo,
      id : Date.now()
    };
    
    toDos.push(newToDoObj); 
    paintToDo(newToDoObj);
    saveToDos();
  
  }

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveDos = localStorage.getItem(SAVE_KEY);

if(saveDos != null){
  const parsedToDos = JSON.parse(saveDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
//순서를 정리해보자 : 처음홈피열면, 인사하는 곳에 아무이름 입력하는 로그인폼, 할 일 입력하는 toDo 리스트 폼, 시간, 배경, 명언문구, 날씨가
// 나온다. 
//이제 이벤트라는 것이 발생하기 이전에도 홈피는 위와 같은 모습을하게되는데, 이미 이것이 코드를 통해 모습을 갖추고 이벤트 받을 준비를 하는것.
//로그인이나 할 일 리스트에 입력을 하게 되면 다음과 같은 순서가 된다. 
// 가장먼저 로컬스토리지를 뒤지게 된다 키값을 찾으려고, 하지만 처음이니 당연저장된건 없다. 
// 할 일을 입력하게 되면 텍스트와 아이디를 가지는 객체가 생성되고 그 객체는 toDos 리스트에 삽입, paintToDo실행, saveToDos를 실행한다.

// paint에서 li, span, button을 html에 생성하고, 딜리트 메서드 실행 + span,button을 li에 추가, li는 toDOList에 추가된다. 
// 딜리트 메서드에서는, 이벤트타켓인 버튼의 부모인자인 li를 Li변수에 입력, 해당 li를 지우고, toDos 리스트를 필터조건에 맞게 다시 재배열한다.
// 이 때 조건은, 버튼에 해당하는 부모 li의 아이디가 기존 toDos 리스트에 있으면 그것을 지우고 나머지를 toDos 리스트에 넣게 된다. 
// 그리고 saveToDos 메서드실행, 로컬스토리지에 키값과 벨류값 셋!. 들어가는 벨류는 아이디와 텍스트 값. 
// 한 사이클 다 돌았음, if 문으로 다시 돌아가면, 로컬에서 키 값 가져오기 있으면 받은 키 값을 JSON.parse로 객체로 변신 시키고 parsedToDos 에
// 그 변수가 다시 toDos 가 됨, 해당 객체의 값들은 각각 paintToDo 메서드를 실행시키게 된다. 
// paint메서드는 다시 html에 li, span, button을 만들고 리스트에 추가된다. 
// 새로 고침을 누를시에 이러한 사이클이 반복된다. 

