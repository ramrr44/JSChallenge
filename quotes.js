const quotes = [
  {quote : "Spread love everywhere you go Let no one ever come to you without leaving happier.",
   auother : "Mother Teres"},
  {quote : "When you reach the end of your rope, tie a knot in it and hang on", 
   auother : "Franklin Roosevelt"},
  {quote : "Always remember that you are absolutely unique. Just like everyone else.",
   auother : "Margaret Mead"},
  {quote : "Don't judge each day by the harvest you reap but by the seeds that you plant.",
   auother : "Robert Louis Stevenson"},
  {quote : "The future belongs to those who believe in the beauty of their dreams.",
   auother : "Eleanor Roosevelt"},
  {quote : "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
   auother : "Benjamin Franklin" },
  {quote : "The best and most beautiful things in the world cannot be seen or even touched they must be felt with the heart.",
   auother : "Helen Keller"},
  {quote : "It is during our darkest moments that we must focus to see the light.",
   auother : "Aristotle"},
  {quote : "Whoever is happy will make others happy too.",
   auother : "Anne Frank"},
  {quote : "Do not go where the path may lead, go instead where there is no path and leave a trail.",
   auother : "Ralph Waldo Emerson"} 
]

const quote = document.querySelector("#quote span:first-child");// span:first-child 에서 공백이있으면 에러가뜹니다. 
const auother = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)]; //floor 는 내림, 랜덤() *리스트사이즈 해서 숫자를 뽑는다. 
// 처음 quotes[] 이 안에 Math함수가 들어가는것이 중요. 
quote.innerText = todayQuote.quote; // 리스트 quotes를 위와같이만들면, 각 튜플내의 키 값을 자동적으로 잡아준다. 
auother.innerText = todayQuote.auother; 

console.log(typeof quotes);
