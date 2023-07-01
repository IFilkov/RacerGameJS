var tm;
var cars;
var cx;
var gameBegin;

// var moveButton = document.querySelector(".move-btn");

// var iSname = prompt("Как вас зовут?");
// var summa = prompt("Введите вашу сумму");
// var c = prompt("На какую машину (от 0 до 4) вы делаете ставку");
// var stavka = prompt("Сколько вы ставите на выигрыш?");

//   $('#remove').on('click', function(){
//     $('.hoge').removeClass('js-move');
//   });

function go() {
  document.getElementById("add").classList.remove("revers");
  document.getElementById("add").classList.add("is-moved");
  iddiv.innerHTML = "";
  if (gameBegin == 1) return;
  gameBegin = 1;
  cars = [];
  cx = [];
  for (var i = 1; i < 5; i++) {
    cars[i] = document.getElementById("p" + i);
    cars[i].style.border = "none";
    cx[i] = 1200; //1600
  }

  tm = setInterval(timerGo, 50);
}

function timerGo() {
  //   document.getElementById("add").onclick = function () {
  //     document.getElementById("add").classList.add("is-moved");
  //   };
  for (var i = 1; i < 5; i++) {
    cx[i] -= parseInt(Math.random() * 17 + 2);
    if (cx[i] <= 40) {
      clearInterval(tm);
      gameBegin = 0;

      cars[i].style.border = "5px ridge yellow";
      document.getElementById("add").classList.remove("is-moved");
      document.getElementById("add").classList.add("revers");
      cars[i].style.transform = "translate";
      console.log("Winner is " + i);
      iddiv.innerHTML = "Winner is " + i;

      return;
    }
    cars[i].style.left = cx[i] + "px";
  }
}
