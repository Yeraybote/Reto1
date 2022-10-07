/**
* @author Grupo 1, 142GA DAW <wat2022.wordpress.com>
* 
**/


/**@var Variables globales para el envio y recibo de datos**/

 var marcha_js;
 var paro_js
 var emergencia_js
 var receivedData;
 var sendData;

/**getElementById(id) busca el elemento HTML con el id especificado en id por parámetro y AddEventListener() tomará el evento y lo pone a escuchar*/
  document.getElementById("marcha").addEventListener("click", sendDataMarcha);
 document.getElementById("paro").addEventListener("click", sendDataParo);
 document.getElementById("emergencia").addEventListener("click", sendDataEmergencia);

//Primero necesitamos crear una función asíncrona
 async function receiveData () {

    //Espera (await) una respuesta de fetch()
	//Sabemos que el método then() será el que se disparará si todo sale bien.
	try {
		// Realizamos la petición y guardamos la promesa
		receivedData = await fetch("API.html").then((response) => response.json()).then((data) =>{return data});
	//Pero en el caso en el cual hay un error atrápalo con catch.	
	} catch(e) {
		alert(e);
	}
	 //Procesar los datos y
	// Si es resuelta, entonces ejecuta estas funciones
	marchaF();
	paroF();
	console.log(marcha_js);
	console.log(paro_js);
	console.log(receivedData);
	sendData = receiveData;

   }  

 //Creamos esta funcion para recargar los datos recibidos de forma automática
 let interval;
 async function recharge() {
  	//El método llama a una función a intervalos específicos (en milisegundos). 
	 if(!interval){
		interval = setInterval (receiveData,1000);
	 }
   }

 //Ejecutamos la funcion
 recharge();

//receiveData();


async function sendDataMarcha () {
    //Espera (await) una respuesta de fetch()
	//Sabemos que el método then() será el que se disparará si todo sale bien.
	try {
		/**FormData proporciona una manera sencilla de construir un conjunto de parejas clave/valor 
		 que representan los campos de un formulario y sus valores pasados al constructor URLSearchParams**/
		sendData = new URLSearchParams (new FormData(document.getElementById("marcha")));
		console.log(sendData);
		// Realizamos la petición y guardamos la promesa
		var test = fetch('API.html', {
			//preparamos la información de envio
			method: 'POST',
			body: sendData
		})		
		//devuelve un objeto JSON del resultado
		.then(response => response.json())
		.then((data) =>{return data});
	//Pero en el caso en el cual hay un error atrápalo con catch.
	} catch(e) {
		alert(e);
	}
	 //Procesar los datos y
	// Si es resuelta, entonces ejecuta estas funciones
	receiveData();
	console.log(test);
  } 

async function sendDataParo () {

    //Espera (await) una respuesta de fetch()
	//Sabemos que el método then() será el que se disparará si todo sale bien.
	try {
		/**FormData proporciona una manera sencilla de construir un conjunto de parejas clave/valor 
		 que representan los campos de un formulario y sus valores pasados al constructor URLSearchParams**/
		sendData = new URLSearchParams (new FormData(document.getElementById("paro")));
		console.log(sendData);
		// Realizamos la petición y guardamos la promesa
		var test = fetch('API.html', {
			//preparamos la información de envio
			method: 'POST',
			body: sendData
		})		
		//devuelve un objeto JSON del resultado
		.then(response => response.json())
		.then((data) =>{return data});
	//Pero en el caso en el cual hay un error atrápalo con catch.
	} catch(e) {
		alert(e);
	}
	//Procesar los datos y
	// Si es resuelta, entonces ejecuta estas funciones
	receiveData();
	console.log(test);
} 

async function sendDataEmergencia () {

    //Espera (await) una respuesta de fetch()
	//Sabemos que el método then() será el que se disparará si todo sale bien.
	try {
		/**FormData proporciona una manera sencilla de construir un conjunto de parejas clave/valor 
		 que representan los campos de un formulario y sus valores pasados al constructor URLSearchParams**/
		sendData = new URLSearchParams (new FormData(document.getElementById("emergencia")));
		console.log(sendData);
		var test = fetch('API.html', {
			// preramos la información de envio
			method: 'POST',
			body: sendData
		})		
		//devuelve un objeto JSON del resultado
		.then(response => response.json())
		.then((data) =>{return data});
	//Pero en el caso en el cual hay un error atrápalo con catch.
	} catch(e) {
		alert(e);
	}
	//Procesar los datos y
	//Si es resuelta, entonces ejecuta estas funciones
	receiveData();
	console.log(test);
} 
 
/**Funciones propias para recicibr las variables de nuestro formulario HTML**/

function marchaF(){
	marcha_js = receivedData ['marcha'];
}

function paroF(){
     paro_js = receivedData ['paro'];
}
    
function emergenciaF(){
    emergencia_js = receivedData ['emergencia'];
}
