'use strict'

// Eventos
var inputs = document.getElementsByClassName("input");
for (var i = 0; i < inputs.length; i++) {
	inputs.item(i).addEventListener("click", timeline);
}


function timeline(){
	var input = document.querySelector('.input');
	//input.classList.contains('input');
	if(this.classList.contains('active'))
		alert("ya activo")
	
	input.classList.remove('active');
	this.classList.add('active');
};

/*
$(function(){
	var inputs = $('.input');
	var paras = $('.description-flex-container').find('p');
	inputs.click(function(){
		var t = $(this),
				ind = t.index(),
				matchedPara = paras.eq(ind);
		
		t.add(matchedPara).addClass('active');
		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
	});
});
*/