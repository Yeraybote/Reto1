        document.addEventListener('DOMContentLoaded', flinea1);
        document.getElementById("consultar").addEventListener("click",fdestino);

        function flinea1() {
            var select = document.getElementById("linea1"); 
            var todas=["Ibaiondo","Landaverde","Lakuabizkarra","Wellington","Txagorritxu","Euskal Herria",
                            "Abetxuko","Kristo","Kañabenta","Artapadura","Arriaga","Arbol de Gernika","Portal de Foronda",
                            "Intermodal","Honduras","Europa","Sancho el Sabio","Lovaina","Parlamento","Angulema","Florida",
                            "Hegoalde","Universidad"];
            for(var i = 0; i < todas.length; i++) { 
                var opt = todas[i];
                var el = document.createElement("option");
                el.className="paradas";
                el.textContent = opt;
                el.value = opt;
                select.appendChild(el);
            }
        };



        function fdestino() {

            var abetxuko_florida=["Abetxuko","Kristo","Kañabenta","Artapadura","Arriaga","Arbol de Gernika",
                        "Portal de Foronda","Intermodal","Honduras","Europa","Sancwewho el Sabio",
                        "Lovaina","Parlamento","Angulema","Florida"];

            var ibaiondo_universidad=["Ibaiondo","Landaverde","Lakuabizkarra","Wellington","Txagorritxu","Euskal Herria",
                            "Honduras","Europa","Sancho el Sabio","Lovaina","Parlamento","Angulema","Florida",
                            "Hegoalde","Universidad"];

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

            
            var a = document.getElementById("destino");
            var value2 = a.options[a.selectedIndex].value;


            alert("funcion 1 OK");

            switch(value2){

                case "Abetxuko": alert("case OK");
                    parada(abetxuko_florida,florida_abetxuko_horarios);
                    break;

                case "Ibaiondo": parada(ibaiondo_universidad,universidad_ibaiondo_horarios);

                case "Florida": parada(abetxuko_florida,abetxuko_florida_horarios);

                case "Universidad": parada(ibaiondo_universidad,ibaiondo_universidad_horarios);

            };

        };





        function parada(a,b) {

            var e = document.getElementById("origen");
            var value = e.options[e.selectedIndex].value;

            alert("funcion 2 OK");

            for (var i = 0; i < a.length; i++) {
                if(value == a[i]){
                    alert("funcion 2 for2 OK");
                    let dato1 = i;
                    let dato2 = b;
                    horario(dato1,dato2);
                }
            }
        };

        function horario(a,b){

            alert("funcion 3 dentro");

            let date1=new Date(2022,0,1,0,15);
            let mins=date1.getMinutes();

            let dtext2=actual.getHours();

            let dtext1=b[a].setHours(dtext2);
            dtext1=b[a].toTimeString();
            dtext1=dtext1.split(' ')[0];

            alert("funcion 3 OK");

            let date2=b[a].setHours(dtext2);
            for (var i = 0; i < 3; i++) {
                date2.setMinutes(date2.getMinutes()+mins);
                dtext=b[a].toTimeString();
                dtext=dtext.split(' ')[0];
                document.write(dtext+" "+"\n");

            }

        };