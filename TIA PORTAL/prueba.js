
var marcha_js;
var paro_js
var emergencia_js
var receivedData;
var sendData;

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

document.getElementById("marcha").addEventListener("click", sendDataMarcha);
document.getElementById("paro").addEventListener("click", sendDataParo);
document.getElementById("emergencia").addEventListener("click", sendDataEmergencia);

// receiveData();

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
	sendData = receiveData;
} 

 

  let interval;
	
  async function recharge() {
	 if(!interval){
		interval = setInterval (receiveData,1000);
	 }
	
}
recharge();

async function sendDataMarcha () {

    //Espera (await) una respuesta de fetch()
	//Sabemos que el método then() será el que se disparará si todo sale bien.
	try {
		sendData = new URLSearchParams (new FormData(document.getElementById("marcha")));
		console.log(sendData);
		var test = fetch('API.html', {
			method: 'POST',
			body: sendData
		})		
		.then(response => response.json())
		.then((data) =>{return data});
	
	} catch(e) {
		alert(e);
	}
	receiveData();
	console.log(test);
  } 

async function sendDataParo () {

    //Espera (await) una respuesta de fetch()
	//Sabemos que el método then() será el que se disparará si todo sale bien.
	try {
		sendData = new URLSearchParams (new FormData(document.getElementById("paro")));
		console.log(sendData);
		var test = fetch('API.html', {
			method: 'POST',
			body: sendData
		})		
		.then(response => response.json())
		.then((data) =>{return data});
	
	} catch(e) {
		alert(e);
	}
	receiveData();
	console.log(test);
} 

async function sendDataEmergencia () {

    //Espera (await) una respuesta de fetch()
	//Sabemos que el método then() será el que se disparará si todo sale bien.
	try {
		sendData = new URLSearchParams (new FormData(document.getElementById("emergencia")));
		console.log(sendData);
		var test = fetch('API.html', {
			method: 'POST',
			body: sendData
		})		
		.then(response => response.json())
		.then((data) =>{return data});
	
	} catch(e) {
		alert(e);
	}
	receiveData();
	console.log(test);
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
