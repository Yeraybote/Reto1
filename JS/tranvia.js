/******************* BOTÓN AUTO + MANUAL ************************/
// Eventos
var boton_label = document.getElementById("boton-label");

if(boton_label) {
    boton_label.addEventListener('change', function() {
        if (this.checked) {
            //console.log("Checkbox is checked..");
            document.getElementById("manual").style.visibility = "hidden";
            document.getElementById("automatico").style.visibility = "visible";
            document.getElementById("estados").style.visibility = "visible";

            // Desactivar la función de los botones de las paradas
            bot.onclick = true;
            bot1.onclick = true;
            bot2.onclick = true;
            bot3.onclick = true;
        } else {
            //console.log("Checkbox is not checked..");
            document.getElementById("manual").style.visibility = "visible";  
            document.getElementById("automatico").style.visibility = "hidden";
            document.getElementById("estados").style.visibility = "hidden";

            // Activar la función de los botones de las paradas
            bot.onclick = moverhome;
            bot1.onclick = moverp1;
            bot2.onclick = moverp2;
            bot3.onclick = moverp3;
        }
    });
};

// Desactivar la función de los botones de las paradas
var bot = document.getElementById("estaciones");
bot.onclick = true;

var bot1 = document.getElementById("estaciones1");
bot1.onclick = true;

var bot2 = document.getElementById("estaciones2");
bot2.onclick = true;

var bot3 = document.getElementById("estaciones3");
bot3.onclick = true;

//Inicializar texto botones
document.getElementById("manual").style.visibility = "hidden";
document.getElementById("automatico").style.visibility = "visible";
document.getElementById("estados").style.visibility = "visible";


// Variables globales
var parada = 0;
var quieto = false;
var emergencia = false;

// Función para movernos a la parada 1, dependiendo en que parada estemos ubicados
let moverp1 = function() {
  if (parada == 0) {
    document.getElementById("train").style.animation = 'home-p1 5s';
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  if (parada == 2) {
    document.getElementById("train").style.animation = 'p2-p1 5s';
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  if (parada == 3) {
    document.getElementById("train").style.animation = 'p3-p1 5s';
    document.getElementById("train").style.animationFillMode = 'forwards';
  }

  // Especificamos en que parada está
  parada = 1;
};

// Función para movernos a la parada 2, dependiendo en que parada estemos ubicados
let moverp2 = function() {
  if (parada == 0) {
    document.getElementById("train").style.animation = 'home-p2 5s';
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  if (parada == 1) {
    document.getElementById("train").style.animation = 'p1-p2 5s';
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  if (parada == 3) {
    document.getElementById("train").style.animation = 'p3-p2 5s';
    document.getElementById("train").style.animationFillMode = 'forwards';
  }

  // Especificamos en que parada está
  parada = 2;
};

// Función para movernos a la parada 3, dependiendo en que parada estemos ubicados
let moverp3 = function() {
  if (parada == 0) {
    document.getElementById("train").style.animation = 'home-p3 5s';
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  if (parada == 1) {
    document.getElementById("train").style.animation = 'p1-p3 5s';
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  if (parada == 2) {
    document.getElementById("train").style.animation = 'p2-p3 5s';
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  
    // Especificamos en que parada está
  parada = 3;
};

// Función para movernos a la cochera, dependiendo en que parada estemos ubicados
let moverhome = function() {
  if (parada == 1) {
    document.getElementById("train").style.animation = 'p1-home 5s';
    document.getElementById("train").style.animationFillMode = 'forwards';
   }
  if (parada == 2) {
    document.getElementById("train").style.animation = 'p2-home 5s';
    document.getElementById("train").style.animationFillMode = 'forwards';
  }
  if (parada == 3) {
    document.getElementById("train").style.animation = 'p3-home 8s';
    document.getElementById("train").style.animationFillMode = 'forwards';
   }

   // Especificamos en que parada está
   parada = 0;
};

// Función boton automatico
let automatico = function () {
  quieto = false;
  auto();
  setInterval(autosinorigen, 24000)
  
};

// Primer trayecto al darle automatico
function auto (){
  setTimeout(homep1,1000);
  setTimeout(p1p2,7000);
  setTimeout(p2p3,13000);
  setTimeout(p3p2,19000);
  setTimeout(p2p1,25000);
}

// Segunda parte trayecto que se va a repetir constantemente
function autosinorigen (){
  setTimeout(p1p2,7000);
  setTimeout(p2p3,13000);
  setTimeout(p3p2,19000);
  setTimeout(p2p1,25000);
}

/* Movimientos para la función de automatico */
function homep1() {
  if (quieto == false) {
  document.getElementById("train").style.animation = 'home-p1 5s';
  document.getElementById("train").style.animationFillMode = 'forwards';
  parada = 1;
  }
  else parada = 0;
}

// Movimiento de la parada 1 a la 2
function p1p2() {
  if (quieto == false) {
  document.getElementById("train").style.animation = 'p1-p2 5s';
  document.getElementById("train").style.animationFillMode = 'forwards';
  parada = 2;
  }
  else parada = 1;
}

// Movimiento de la parada 2 a la 3
function p2p3() {
  if (quieto == false) {
  document.getElementById("train").style.animation = 'p2-p3 5s';
  document.getElementById("train").style.animationFillMode = 'forwards';
  parada = 3;
  }
  else parada = 2;
}

// Movimiento de la parada 3 a la 2
function p3p2() {
  if (quieto == false) {
  document.getElementById("train").style.animation = 'p3-p2 5s';
  document.getElementById("train").style.animationFillMode = 'forwards';
  parada = 2;
  }
  else parada = 3;
}

// Movimiento de la parada 2 a la 1
function p2p1() {
  if (quieto == false) {
  document.getElementById("train").style.animation = 'p2-p1 5s';
  document.getElementById("train").style.animationFillMode = 'forwards';
  parada = 1;
  }
  else parada = 2;
}

// Movimiento de la parada 1 a la cochera
function p1home() {
  if (quieto == false) {
  document.getElementById("train").style.animation = 'p1-home 5s';
  document.getElementById("train").style.animationFillMode = 'forwards';
  parada = 0;
  }
  else parada = 1;
}

/************************* Funciones paro y emergencia **************************/

let paro = function (){
  quieto = true;
};

let emer = function (){
  emergencia = true;
  moverhome();
};
