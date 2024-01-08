// ---------------------------fighter_plane------------------

let topp = 500;
let left = 600;
document.addEventListener("keydown", () => {
  let plane = document.getElementById("plane");
  // console.log(event.keyCode)
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
  if(event.keyCode==32){
    let p = document.getElementById("gunsound");
    p.play();
    left_bullot()
    right_bullot()
  }
});
function left_bullot(){
  let bullet = document.createElement("img");
    bullet.src = "bullet.png";
    bullet.style.top = `${topp + 70}px`;
    bullet.style.left = `${left-15}px`;
    bullet.className = "bulletl";
    document.body.appendChild(bullet);
}
function right_bullot(){
  let bullet = document.createElement("img");
    bullet.src = "bullet.png";
    bullet.style.top = `${topp + 70}px`;
    bullet.style.left = `${left+30}px`;
    bullet.className = "bulletr";
    document.body.appendChild(bullet);
}
// -----------------------------bullet-----------------------

setInterval(() => {
  let b = document.querySelectorAll(".bulletr");
  for (i = 0; i < b.length; i++) {
    let t = b[i].offsetTop - 700;
    b[i].style.top = `${t}px`;
    if (b[i].offsetTop < 0) b[i].remove();
  }
}, 10);
setInterval(() => {
  let b = document.querySelectorAll(".bulletl");
  for (i = 0; i < b.length; i++) {
    let t = b[i].offsetTop - 700;
    b[i].style.top = `${t}px`;
    if (b[i].offsetTop < 0) b[i].remove();
  }
}, 10);

//------------------------------Enemy------------------------

const enemy = ["1.png", "2.png", "3.png", "snow.png", "b.png"];
let l = 0;
let set4=setInterval(() => {
  let left = Math.floor(Math.random() * window.innerWidth-100);
  //  console.log(left)
  let emy = document.createElement("img");
  l = l % 5;
  emy.src = `${enemy[l++]}`;
  emy.style.top = "-100px";
  emy.style.left = `${left}px`;
  emy.className = "fire";
  document.body.appendChild(emy);
  
}, 1500);

//----------------------------shoot-----------------
let score=0;
function shoot(){
  let b = document.querySelectorAll(".fire");
  let lbt = document.querySelectorAll(".bulletl");
  let rbt = document.querySelectorAll(".bulletr");
    let enemy_fire = document.querySelectorAll(".fire");
    let fscore = document.querySelector("#fscore");
    for (let i = 0; i < enemy_fire.length; i++) {
      // ######### Destroy enemy#######################
      if (
        lbt[0].offsetLeft + 70 > enemy_fire[i].offsetLeft &&
        lbt[0].offsetTop+50 < enemy_fire[i].offsetTop+150 &&
        lbt[0].offsetLeft < enemy_fire[i].offsetLeft + 30
      ) {
        let bomb = document.querySelector("#bomb");
        bomb.play();
        fscore.innerHTML=++score;
        let l = enemy_fire[i].offsetLeft;
        let t = enemy_fire[i].offsetTop;
        enemy_fire[i].remove();
        lbt[0].remove()
        rbt[0].remove()
        let flame = document.querySelector("#flame");
          flame.style.left = `${l}px`;
          flame.style.top = `${t}px`;
          flame.style.display = "block"; 
        setTimeout(() => {
          flame.style.display = "none"; 
        },1000);
        // flame.style.display="none"
      }
    //   if(enemy_fire[i].offsetTop<0)
    //   enemy_fire[0].remove();
    }
}
let set3=setInterval(shoot,200);
// ----------------------------Enemy fire-------------------------

let set2=setInterval(() => {
  let b = document.querySelectorAll(".fire");
  for (i = 0; i < b.length; i++) {
    let t = b[i].offsetTop + 30;
    b[i].style.top = `${t}px`;
    if (b[i].offsetTop > window.innerHeight) b[i].remove();
  }
},100);

// ---------------------------Time---------------------------
let sec=1;
let min=0;
let set1=setInterval(()=>{
    let time=document.getElementById('timemin');
    // let sec=document.getElementById('timesec');
    if(sec==59){
      sec=0
      // min.innerHTML=min++;
      min++;
    }
    time.innerHTML=`${min} : ${sec++}`;
},1000)

// ------------------Game over-----------------
function game_over(){
  let enemy=document.querySelectorAll('.fire')
  let plane=document.getElementById('plane')
  let go=document.getElementById('gameOver')
  let main=document.getElementById('main')
  for(let x=0; x<enemy.length; x++){
    if(enemy[x].offsetLeft<plane.offsetLeft+70 && enemy[x].offsetLeft+50>plane.offsetLeft && plane.offsetTop<enemy[x].offsetTop+50){
      go.play()
      clearInterval(set1)
      clearInterval(set2)
      clearInterval(set3)
      clearInterval(set4)
      clearInterval(set5)
      main.style.display='block';
    }
  }
}
let set5=setInterval(game_over,100)

// -----------------Page reload----------------

function reload(){
  location.reload()
}

// ----------------Exit------------------------------

function exit_page(){
  window.close();
}