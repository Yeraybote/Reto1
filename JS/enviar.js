'use strict'

// Eventos
document.getElementById("bValidar").addEventListener("click", automatico);
document.getElementById("m_manual").addEventListener("click", manual);

function automatico() {
    alert('automatico');
}

function manual() {
    try {
        alert("manual")
    }
    catch (e) {}
}