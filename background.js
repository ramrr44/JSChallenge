const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg" ];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");  // 실제 다큐먼트 즉, html 에다가 이미지라는 것을 생성한다. 

bgImage.src = `image/${chosenImage}`;

document.body.appendChild(bgImage); 

bgImage.id = 'bgImage';
// 위에 이미지의 아이디 만을 images 어레이에서 받아온 bgImage로 해주었을 뿐인데 배경이 웹의 백그라운드로 멋지게 들어감을 확인. 