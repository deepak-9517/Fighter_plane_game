// ---------------------------fighter_plane------------------

let topp = 500;
let left = 600;
document.addEventListener("keydown", () => {
  let plane = document.getElementById("plane");
  switch (event.key) {
    case "ArrowUp":
      if (topp >= 0) topp = topp - 10;
      plane.style.top = `${topp}px`;
      break;
    case "ArrowDown":
      if (topp <= window.innerHeight - 170) topp = topp + 10;
      plane.style.top = `${topp}px`;
      break;
    case "ArrowLeft":
      if (left >= 0) left = left - 10;
      plane.style.left = `${left}px`;
      break;
    case "ArrowRight":
      if (left <= window.innerWidth - 100) left = left + 10;
      plane.style.left = `${left}px`;
      break;
  }
});

// -----------------------------bullet-----------------------

setInterval(() => {
  let bullet = document.createElement("img");
  bullet.src = "bullet.png";
  bullet.style.top = `${topp + 70}px`;
  bullet.style.left = `${left + 5}px`;
  bullet.className = "bulletr";
  document.body.appendChild(bullet);
  let b = document.querySelectorAll(".bulletr");
  for (i = 0; i < b.length; i++) {
    let t = b[i].offsetTop - 60;
    b[i].style.top = `${t}px`;
    if (b[i].offsetTop < 0) b[i].remove();
  }
}, 200);
setInterval(() => {
  let bullet = document.createElement("img");
  bullet.src = "bullet.png";
  bullet.style.top = `${topp + 70}px`;
  bullet.style.left = `${left + 50}px`;
  bullet.className = "bulletl";
  document.body.appendChild(bullet);
  let b = document.querySelectorAll(".bulletl");
  for (i = 0; i < b.length; i++) {
    let t = b[i].offsetTop - 60;
    b[i].style.top = `${t}px`;
    if (b[i].offsetTop < 0) b[i].remove();
  }
}, 200);

//------------------------------Enemy------------------------

const enemy = ["1.png", "2.png", "3.png", "snow.png", "b.png"];
let l = 0;
setInterval(() => {
  let left = Math.floor(Math.random() * window.innerWidth);
  //  console.log(left)
  let emy = document.createElement("img");
  l = l % 5;
  emy.src = `${enemy[l++]}`;
  emy.style.top = "-100px";
  emy.style.left = `${left}px`;
  emy.className = "fire";
  document.body.appendChild(emy);
  let b = document.querySelectorAll(".fire");
  // setInterval(() => {
    // let lbt = document.querySelectorAll(".bulletr");
    // let enemy_fire = document.querySelectorAll(".fire");
    // for (let i = 0; i < lbt.length; i++) {
    //   // ######### Destroy enemy#######################
    //   if (
    //     lbt[i].offsetLeft + 100 > enemy_fire[i].offsetLeft &&
    //     lbt[i].offsetTop < enemy_fire[i].offsetTop+150 &&
    //     lbt[i].offsetLeft < enemy_fire[i].offsetLeft + 70
    //   ) {
    //     let bomb = document.querySelector("#bomb");
    //     // bomb.play();
    //     let l = enemy_fire[i].offsetLeft;
    //     let t = enemy_fire[i].offsetTop;
    //     let flame = document.querySelector("#flame");
    //       flame.style.left = `${l}px`;
    //       flame.style.top = `${t}px`;
    //       flame.style.display = "block"; 
    //     setTimeout(() => {
    //       flame.style.display = "none"; 
    //     },1000);
    //     // flame.style.display="none"
    //     enemy_fire[i].remove();
    //   }
    // }
  // },10);
}, 3000);

//----------------------------shoot-----------------
function shoot(){
  let lbt = document.querySelectorAll(".bulletr");
    let enemy_fire = document.querySelectorAll(".fire");
    for (let i = 0; i < lbt.length; i++) {
      // ######### Destroy enemy#######################
      if (
        lbt[i].offsetLeft + 100 > enemy_fire[i].offsetLeft &&
        lbt[i].offsetTop < enemy_fire[i].offsetTop+150 &&
        lbt[i].offsetLeft < enemy_fire[i].offsetLeft + 70
      ) {
        let bomb = document.querySelector("#bomb");
        // bomb.play();
        let l = enemy_fire[i].offsetLeft;
        let t = enemy_fire[i].offsetTop;
        let flame = document.querySelector("#flame");
          flame.style.left = `${l}px`;
          flame.style.top = `${t}px`;
          flame.style.display = "block"; 
        setTimeout(() => {
          flame.style.display = "none"; 
        },1000);
        // flame.style.display="none"
        enemy_fire[i].remove();
      }
    }
}
window.setInterval(shoot,10);

// ----------------------------Enemy fire-------------------------

setInterval(() => {
  let b = document.querySelectorAll(".fire");
  for (i = 0; i < b.length; i++) {
    let t = b[i].offsetTop + 30;
    b[i].style.top = `${t}px`;
    if (b[i].offsetTop > window.innerHeight) b[i].style.display = "none";
  }
}, 100);

// --------------------- sound----------------------
function sound() {
  // alert('j')
  // let p = document.getElementById("gunsound");
  // p.play();
  // p.addEventListener(function () {
  //   window.location = "http://localhost/sampleAudio22.html";
  // });
}

// css

// .bulletr,.bulletl{
//     position: absolute;
//     z-index: -10;
//     transform: rotate(-90deg);
//     height: 15px;
//     /* background-color: red; */
//     width: 35px;
//     transition: 0.5s;
// }