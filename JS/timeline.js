'use strict'
/*
// Eventos
var inputs = document.getElementsByClassName("input");
for (var i = 0; i < inputs.length; i++) {
	inputs.item(i).addEventListener("click", timeline);
}


function timeline(){
	var inputs = document.getElementsByClassName("input");
	var paras = document.getElementsByClassName("description-flex-container").children;
	inputs.click(function(){
		var t = $(document).ready(this),
				ind = t.index(),
				matchedPara = paras.eq(ind);
		
		t.add(matchedPara).addClass('active');
		inputs.not(t).add(paras.not(matchedPara)).removeClass('active');
	});
};
*/

document.querySelector(function(){
	var inputs = document.getElementsByClassName("input");
	var paras = document.getElementsByClassName("description-flex-container").children;
	inputs.click(function(){
		let t = document.querySelector(this),
				ind = t.index(),
				matchedPara = paras.eq(ind);
		
		t.add(matchedPara).classList.add('active');
		inputs.not(t).add(paras.not(matchedPara)).classList.remove('active');
	});
});

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