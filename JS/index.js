function mostrarContrasena(){
    var tipo = document.getElementById("pass");
    if(tipo.type == "password"){
        tipo.type = "text";
    }else{
        tipo.type = "password";
    }
}

function inicioSesion(){
    var usuarios = [{user: "admin", pass:"admin"},{user: "Yeray", pass:"ee"}];
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
       alert(e); 
    }
}

