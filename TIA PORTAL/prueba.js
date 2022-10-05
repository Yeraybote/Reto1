
var marcha_js;
var paro_js
var emergencia_js
var receivedData;

/*
function receiveData () {

    //Espera (await) una respuesta de fetch()
	//Sabemos que el método then() será el que se disparará si todo sale bien.
	try {
		receivedData = await fetch("API.html").then((response) => response.json()).then((data) =>{return data});
	} catch(e) {
		alert(e);
	}
	marchaF();
	paroF();
	console.log(marcha_js);
	console.log(paro_js);
 } 

async function recharge() {
	while(true) {
		let timelapse = new Promise(function(resolve) {
			setTimeout(receiveData(), 3000);
		 });
		await timelapse;
		console.log("regarga")
	}
}

recharge();
*/  

receiveData();

//Primero necesitamos crear una función asíncrona

async function receiveData () {

    //Espera (await) una respuesta de fetch()
	//Sabemos que el método then() será el que se disparará si todo sale bien.
	try {
		receivedData = await fetch("API.html").then((response) => response.json()).then((data) =>{return data});
	} catch(e) {
		alert(e);
	}
	marchaF();
	paroF();
	console.log(marcha_js);
	console.log(paro_js);
	
	console.log(receivedData);
  } 

 
function marchaF(){
	marcha_js = receivedData ['marcha'];
 }

function paroF(){
     paro_js = receivedData ['paro'];
}
    
function emergenciaF(){
    emergencia_js = receivedData ['emergencia'];
}
           