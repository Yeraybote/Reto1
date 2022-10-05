        linea1();
        linea2();
        linea3();
        linea4();

        function linea1() {
            var select = document.getElementById("linea1"); 
            var abetxuko_florida=["Abetxuko","Kristo","Kañabenta","Artapadura","Arriaga","Arbol de Gernika",
                        "Portal de Foronda","Intermodal","Honduras","Europa","Sancho el Sabio",
                        "Lovaina","Parlamento","Angulema","Florida"];
            for(var i = 0; i < abetxuko_florida.length; i++) { 
                var opt = abetxuko_florida[i]; 
                var el = document.createElement("option"); 
                el.textContent = opt; 
                el.value = opt; 
                select.appendChild(el); 
            }
        }

        function linea2() {
            var select = document.getElementById("linea2"); 
            var ibaiondo_universidad=["Ibaiondo","Landaverde","Lakuabizkarra","Wellington","Txagorritxu","Euskal Herria",
                            "Honduras","Europa","Sancho el Sabio","Lovaina","Parlamento","Angulema","Florida",
                            "Hegoalde","Universidad"];
            for(var i = 0; i < ibaiondo_universidad.length; i++) { 
                var opt = ibaiondo_universidad[i]; 
                var el = document.createElement("option"); 
                el.textContent = opt; 
                el.value = opt; 
                select.appendChild(el); 
            }
        }


        function linea3() {
            var select = document.getElementById("linea3"); 
            var abetxuko_florida=["Abetxuko","Kristo","Kañabenta","Artapadura","Arriaga","Arbol de Gernika",
                        "Portal de Foronda","Intermodal","Honduras","Europa","Sancho el Sabio",
                        "Lovaina","Parlamento","Angulema","Florida"];
            for(var i = 0; i < abetxuko_florida.length; i++) { 
                var opt = abetxuko_florida[i]; 
                var el = document.createElement("option"); 
                el.textContent = opt; 
                el.value = opt; 
                select.appendChild(el); 
            }
        }

        function linea4() {
            var select = document.getElementById("linea4"); 
            var ibaiondo_universidad=["Ibaiondo","Landaverde","Lakuabizkarra","Wellington","Txagorritxu","Euskal Herria",
                            "Honduras","Europa","Sancho el Sabio","Lovaina","Parlamento","Angulema","Florida",
                            "Hegoalde","Universidad"];
            for(var i = 0; i < ibaiondo_universidad.length; i++) { 
                var opt = ibaiondo_universidad[i]; 
                var el = document.createElement("option"); 
                el.textContent = opt; 
                el.value = opt; 
                select.appendChild(el); 
            }
        }