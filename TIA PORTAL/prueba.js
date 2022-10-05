
var marcha_js;
var paro_js
var emergencia_js
var receivedData;

//Primero necesitamos crear una función asíncrona

async function receiveData () {

    //Espera (await) una respuesta de fetch()
     receivedData = await fetch ("API.html")
    //Sabemos que el método then() será el que se disparará si todo sale bien.
        .then((response) => response.json()).then((data) =>{
            return data
        })
        .catch(err => {
            alert('promise rejected: ', err);
        });
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
     
    
    
      

    






