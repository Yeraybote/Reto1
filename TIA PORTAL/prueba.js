
var marcha_js;
var paro_js;
var emergencia_js;



function recogidaDatos(){

	fetch ("API.html")
	.then((response) => {

		//Comprobamos que el estado de la respuesta sea valido

		if(response.ok)

			return response.text();

		throw Error ("Error en la peticion");	

		})

		.then ((data) => {
			alert(data);
		});
		.catch ((err)=> {
			alert(err);

		});

	}
	window.onload = enviarMarcha();




