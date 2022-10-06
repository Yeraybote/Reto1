'use strict'

// Eventos
var inputs = document.getElementsByClassName("input");
for (var i = 0; i < inputs.length; i++) {
	inputs.item(i).addEventListener("click", timeline);

	if(i != 0)
		inputs.item(i).classList.remove("active");
}


function timeline(){
	/*
	var input = document.querySelector('.input');
	//input.classList.contains('input');
	//if(this.classList.contains('active'))
	//	alert("ya activo")

	//alert(e.target.className);
	
	input.classList.remove("active");
	
	this.classList.add("active");

	//input.setAttribute('class=input');
	//this.setAttribute('class=input')
	*/
	var inputs = document.getElementsByClassName("input");
	for (var i = 0; i < inputs.length; i++) {
		inputs.item(i).classList.remove("active");
	}
	this.classList.add("active");
};