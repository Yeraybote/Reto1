var parada = 0;
var tranvia;
let moverp3 = function() {
  let start = Date.now();
  let timer = setInterval(function() {
  let timePassed = Date.now() - start;

  train.style.left = timePassed / 10 + 'px';

if (timePassed > 9700) clearInterval(timer);

}, 20);
parada = 3;
}

let moverp2 = function() {
      let start = Date.now();
      let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 10 + 'px';

    if (timePassed > 6250) clearInterval(timer);

    }, 20);
    parada = 2;
  }

  let moverp1 = function() {
    
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 10 + 'px';
      tranvia = timePassed / 10 + 'px';

      if (timePassed > 2900) clearInterval(timer);

    }, 20);
    parada = 1;
  }  

  let moverhome = function() {
    
    let start = Date.now();

    if (parada == 1) {
      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        train.style.left = 800 + '%';
        train.style.left = timePassed / -10 + 'px';
  
        if (timePassed > 2900) clearInterval(timer);
  
      }, 20);
    }
    
    if (parada == 2) {
      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        train.style.left = timePassed / -10 + 'px';
  
        if (timePassed > 6250) clearInterval(timer);
  
      }, 20);
    }

    if (parada == 3) {
      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        train.style.left = timePassed / -10 + 'px';
  
        if (timePassed > 9700) clearInterval(timer);
  
      }, 20);
    }
    parada = 0;
  }   