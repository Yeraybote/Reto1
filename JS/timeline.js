/**
* @author Grupo 1, 142GA DAW <wat2022.wordpress.com>
* 
**/

'use strict'

/*Eventos para seleccionar los botones que representan cada parada*/
var inputs = document.getElementsByClassName("input");
for (var i = 0; i < inputs.length; i++) {
	inputs.item(i).addEventListener("click", timeline);

	if(i != 0)
		inputs.item(i).classList.remove("active");
}

/*Método para seleccionar y deseleccionar dichos eventos para cada botón*/
function timeline(){
	var inputs = document.getElementsByClassName("input");
	for (var i = 0; i < inputs.length; i++) {
		inputs.item(i).classList.remove("active");
	}
	this.classList.add("active");
};


