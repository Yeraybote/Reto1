var parada = 0;

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

      if (timePassed > 2900) clearInterval(timer);

    }, 20);
    parada = 1;
  }  

  let moverhome = function() {
    
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 30 + '%';

      if (timePassed > 10) clearInterval(timer);

    }, 20);
    parada = 0;
  }  

  