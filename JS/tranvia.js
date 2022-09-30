let mover = function() {
       
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 0.1 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
  }

document.getElementById("train").addEventListener(("click",mover))