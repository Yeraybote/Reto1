
/**
* @author Grupo 1, 142GA DAW <wat2022.wordpress.com>
* 
**/



        //EVENTOS el primero afecta a toda la pagina y el segundo a un boton.
        document.addEventListener('DOMContentLoaded', flinea1); 
        document.getElementById("consultar").addEventListener("click",fdestino);


        //Se activa al cargar la pagina.
        function flinea1() {
            //Seleccionamos el elemento select.
            var select = document.getElementById("linea1"); 
            //Un array con todas las paradas hace las veces de base de datos.
            var todas=["Ibaiondo","Landaverde","Lakuabizkarra","Wellington","Txagorritxu","Euskal Herria",
                            "Abetxuko","Kristo","Kañabenta","Artapadura","Arriaga","Arbol de Gernika","Portal de Foronda",
                            "Intermodal","Honduras","Europa","Sancho el Sabio","Lovaina","Parlamento","Angulema","Florida",
                            "Hegoalde","Universidad"];
            //Llenamos el elemento select con opciones en funcion de la cantidad de paradas.
            for(var i = 0; i < todas.length; i++) { 
                var opt = todas[i];
                var el = document.createElement("option");
                el.className="paradas";
                el.textContent = opt;
                el.value = opt;
                select.appendChild(el);
            }
        };



        //Decide que parametros se van a utilizar en la funcion parada, dependiendo del destino seleccionado.
        function fdestino() {

            //Las paradas que realiza cada ruta.
            var abetxuko_florida=["Abetxuko","Kristo","Kañabenta","Artapadura","Arriaga","Arbol de Gernika",
                        "Portal de Foronda","Intermodal","Honduras","Europa","Sancwewho el Sabio",
                        "Lovaina","Parlamento","Angulema","Florida"];

            var ibaiondo_universidad=["Ibaiondo","Landaverde","Lakuabizkarra","Wellington","Txagorritxu","Euskal Herria",
                            "Honduras","Europa","Sancho el Sabio","Lovaina","Parlamento","Angulema","Florida",
                            "Hegoalde","Universidad"];

            //La hora a la que pasa el primer tranvia por cada parada en cada ruta.
            abetxuko_florida_horarios=[new Date(2022,0,1,6,6),new Date(2022,0,1,6,7),new Date(2022,0,1,6,9)
            ,new Date(2022,0,1,6,11),new Date(2022,0,1,6,12),new Date(2022,0,1,6,13),new Date(2022,0,1,6,15)
            ,new Date(2022,0,1,6,16),new Date(2022,0,1,6,18),new Date(2022,0,1,6,20),new Date(2022,0,1,6,21)
            ,new Date(2022,0,1,6,22),new Date(2022,0,1,6,24),new Date(2022,0,1,6,27),new Date(2022,0,1,6,30)];

            florida_abetxuko_horarios=[new Date(2022,0,1,6,23),new Date(2022,0,1,6,24),new Date(2022,0,1,6,27)
            ,new Date(2022,0,1,6,29),new Date(2022,0,1,6,30),new Date(2022,0,1,6,31),new Date(2022,0,1,6,33)
            ,new Date(2022,0,1,6,35),new Date(2022,0,1,6,36),new Date(2022,0,1,6,38),new Date(2022,0,1,6,39)
            ,new Date(2022,0,1,6,40),new Date(2022,0,1,6,42),new Date(2022,0,1,6,44),new Date(2022,0,1,6,45)];

            ibaiondo_universidad_horarios=[new Date(2022,0,1,6,0),new Date(2022,0,1,6,1),new Date(2022,0,1,6,3)
            ,new Date(2022,0,1,6,4),new Date(2022,0,1,6,6),new Date(2022,0,1,6,7),new Date(2022,0,1,6,9)
            ,new Date(2022,0,1,6,11),new Date(2022,0,1,6,12),new Date(2022,0,1,6,13),new Date(2022,0,1,6,15)
            ,new Date(2022,0,1,6,18),new Date(2022,0,1,6,19),new Date(2022,0,1,6,22),new Date(2022,0,1,6,25)];

            universidad_ibaiondo_horarios=[new Date(2022,0,1,6,29),new Date(2022,0,1,6,31),new Date(2022,0,1,6,34)
            ,new Date(2022,0,1,6,35),new Date(2022,0,1,6,38),new Date(2022,0,1,6,40),new Date(2022,0,1,6,41)
            ,new Date(2022,0,1,6,42),new Date(2022,0,1,6,44),new Date(2022,0,1,6,46),new Date(2022,0,1,6,47)
            ,new Date(2022,0,1,6,49),new Date(2022,0,1,6,50),new Date(2022,0,1,6,52),new Date(2022,0,1,6,54)];

            
            //Seleccionamos un destino de la lista desplegable.
            var a = document.getElementById("destino");
            var value2 = a.options[a.selectedIndex].value;


            //En funcion del destino lanzamos una funcion con unos determinados parametros.
            switch(value2){

                case "Abetxuko": parada2(abetxuko_florida,florida_abetxuko_horarios);
                    break;

                case "Ibaiondo": parada2(ibaiondo_universidad,universidad_ibaiondo_horarios);
                    break;

                case "Florida": parada1(abetxuko_florida,abetxuko_florida_horarios);
                    break;

                case "Universidad": parada1(ibaiondo_universidad,ibaiondo_universidad_horarios);
                    break;

            };

        };



        //Esta funcion busca la posicion de la parada seleccionada, en el array.
       function parada1(a,b) {

            var e = document.getElementById("origen");
            var value = e.options[e.selectedIndex].value;


            for (var i = 0; i < a.length; i++) {
                if(value == a[i]){
                    let dato1 = i;
                    let dato2 = b;
                    horario(dato1,dato2);
                }
            }
        };


        //Es lo mismo que la anterior funcion pero antes de comprobar si hay coincidencias
        //le damos la vuelta al array que contiene las paradas.
        function parada2(a,b) {

            var e = document.getElementById("origen");
            var value = e.options[e.selectedIndex].value;
            let lista=a.reverse();


            for (var i = 0; i < a.length; i++) {
                if(value == a[i]){
                    let dato1 = i;
                    let dato2 = b;
                    horario(dato1,dato2);
                }
            }
        };



        //Esta funcion calcula los horarios del tranbia
        function horario(a,b){


            //creamos una fecha culaquiera con 0 horas y 15 minutos, nos quedamos con los minutos.
            let date1=new Date(2022,0,1,0,15);
            var mins=date1.getMinutes();

            //Creamos una fecha con el tiempo actual y nos quedamos con las horas.
            let actual=new Date();
            let dtext2=actual.getHours();

            //Añadimos la hora actual a la hora de comienzo del tranvia.
            let dtext1=b[a].setHours(dtext2);
            dtext1=b[a].toTimeString();
            dtext1=dtext1.split(' ')[0];

            //Visualizamos la primera hora.
            let visualizar=document.getElementById("hora");
            visualizar.innerHTML=dtext1;

            var select=document.getElementById("reloj");

            //Dado que el tranbia pasa cada 15 minutos, a la primera hora le sumamos 15 minutos 3 veces.
            //La nueva hora se la pasamos a un nuevo elemento h1 que creamos con cada repeticion.
            let date2=b[a];
            for (var i = 0; i < 3; i++) {
                date2.setMinutes(date2.getMinutes()+mins);
                dtext=b[a].toTimeString();
                dtext=dtext.split(' ')[0];
                var opt = dtext;
                var el = document.createElement("h1");
                el.textContent=opt;
                select.appendChild(el);

            }

        };