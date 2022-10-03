var parada = 0;

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