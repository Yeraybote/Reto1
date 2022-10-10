/**
* @author Grupo 1, 142GA DAW <wat2022.wordpress.com>
* 
**/


// Boton del ojo, mostraremos el campo de la contraseña
function mostrarContrasena(){
    var tipo = document.getElementById("pass");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

// Función inicio sesión
function inicioSesion(){
    var usuarios = [{user: "admin", pass:"admin"}];
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    try {
        if (user == "" || pass == "") {
            document.getElementById("merror").style.visibility = "visible";
        }

        let u = usuarios.find(dato => dato.user == user && dato.pass == pass);
               if ( u == undefined)
                    document.getElementById("merror").style.visibility = "visible";
               else
                    window.open("./paginas/inicio.html", "_self");
    } catch(e) {
       console.log(e); 
    }
}

