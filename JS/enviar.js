'use strict'

// Eventos
document.getElementById("boton-label").addEventListener('change', function() {
    if (this.checked) {
        console.log("Checkbox is checked..");
        document.getElementById("manual").style.visibility = "hidden";
        document.getElementById("automatico").style.visibility = "visible";
    } else {
        console.log("Checkbox is not checked..");
        document.getElementById("manual").style.visibility = "visible";  
        document.getElementById("automatico").style.visibility = "hidden";
    }
});

//Inicializar texto botones
document.getElementById("manual").style.visibility = "hidden";
document.getElementById("automatico").style.visibility = "visible";
