// Variables globales
var parada = 0;
var quieto = false;
var emergencia = false;

let moverp1 = function() {
  
  if (parada == 0) {
    document.getElementById("train").style.animation = 'home-p1 5s'
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  if (parada == 2) {
    document.getElementById("train").style.animation = 'p2-p1 5s'
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  if (parada == 3) {
    document.getElementById("train").style.animation = 'p3-p1 5s'
    document.getElementById("train").style.animationFillMode = 'forwards';
  }

  // Especificamos en que parada está
  parada = 1;
}

let moverp2 = function() {
  if (parada == 0) {
    document.getElementById("train").style.animation = 'home-p2 5s'
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  if (parada == 1) {
    document.getElementById("train").style.animation = 'p1-p2 5s'
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  if (parada == 3) {
    document.getElementById("train").style.animation = 'p3-p2 5s'
    document.getElementById("train").style.animationFillMode = 'forwards';
  }

  // Especificamos en que parada está
  parada = 2;
} 

let moverp3 = function() {
  if (parada == 0) {
    document.getElementById("train").style.animation = 'home-p3 5s'
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  if (parada == 1) {
    document.getElementById("train").style.animation = 'p1-p3 5s'
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  if (parada == 2) {
    document.getElementById("train").style.animation = 'p2-p3 5s'
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  
    // Especificamos en que parada está
  parada = 3;
} 

let moverhome = function() {
  
  if (parada == 1) {
    document.getElementById("train").style.animation = 'p1-home 5s'
    document.getElementById("train").style.animationFillMode = 'forwards';
   }
  if (parada == 2) {
    document.getElementById("train").style.animation = 'p2-home 5s'
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  if (parada == 3) {
    document.getElementById("train").style.animation = 'p3-home 8s'
    document.getElementById("train").style.animationFillMode = 'forwards';
   }

   // Especificamos en que parada está
   parada = 0;
}

let automatico = function () {
  quieto = false;
  setTimeout(homep1,1000);
  setTimeout(p1p2,7000);
  setTimeout(p2p3,13000);
  setTimeout(p3p2,19000);
  setTimeout(p2p1,25000);
  setTimeout(p1home,31000);
}

/* Movimientos para la función de automatico */
function homep1() {
  if (quieto == false) {
  document.getElementById("train").style.animation = 'home-p1 5s'
  document.getElementById("train").style.animationFillMode = 'forwards';
  }
  else parada = 0;
}

function p1p2() {
  if (quieto == false) {
  document.getElementById("train").style.animation = 'p1-p2 5s'
  document.getElementById("train").style.animationFillMode = 'forwards';
  }
  else parada = 1;
}

function p2p3() {
  if (quieto == false) {
  document.getElementById("train").style.animation = 'p2-p3 5s'
  document.getElementById("train").style.animationFillMode = 'forwards';
  }
  else parada = 2;
}

function p3p2() {
  if (quieto == false) {
  document.getElementById("train").style.animation = 'p3-p2 5s'
  document.getElementById("train").style.animationFillMode = 'forwards';
  }
  else parada = 3;
}

function p2p1() {
  if (quieto == false) {
  document.getElementById("train").style.animation = 'p2-p1 5s'
  document.getElementById("train").style.animationFillMode = 'forwards';
  }
  else parada = 2;
}

function p1home() {
  if (quieto == false) {
  document.getElementById("train").style.animation = 'p1-home 5s'
  document.getElementById("train").style.animationFillMode = 'forwards';
  }
  else parada = 1;
}

/************************* Funciones paro y emergencia **************************/

let paro = function (){
  quieto = true;
}

let emer = function (){
  emergencia = true;
  moverhome();
}