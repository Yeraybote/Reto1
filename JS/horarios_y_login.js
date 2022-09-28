//base datos 
function guardar(){

					var usuarios=new Array();
					var contra=new Array();

					var nombre=getElementByName("usuario");
					var contraseña=getElementByName("contraseña");
				
					let posicion=usuarios.length();

					usuarios[posicion]=nombre;
					contra[posicion]=contraseña;

					}


function verificar(){

					var nombre=getElementByName("usuario");
					var contraseña=getElementByName("contraseña");
				
					for (var i = 0; i < usuarios.length; i++) {
						if (usuarios[i]==nombre) {
							for (var e = 0; e < contra.length; e++) {
								if (contra[e]==contraseña) {
									alert("Bienvenido"+nombre);
								}
							}
						}
					}


function horarios(){

	var abetxuko_florida=["Abetxuko","Kristo","Kañabenta","Artapadura","Arriaga","Arbol de Gernika",
						"Portal de Foronda","Intermodal","Honduras","Europa","Sancho el Sabio",
						"Lovaina","Parlamento","Angulema","Florida"];

	var ibaiondo_universidad=["Ibaiondo","Landaverde","Lakuabizkarra","Wellington","Txagorritxu","Euskal Herria",
							"Honduras","Europa","Sancho el Sabio","Lovaina","Parlamento","Angulema","Florida",
							"Hegoalde","Universidad"];

	var abetxuko_florida_horarios=new Array();


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


	let menu=prompt("Para ver los horarios de salida del tranbia elija un numero.\n"+
			"a  abetxuko_florida.\n"+
			"b  florida_abetxuko.\n"+
			"c  ibaiondo_universidad.\n"+
			"d  universidad_ibaiondo.");

	let a="a";
	let b="b";
	let c="c";
	let d="d";

	switch(menu){

		case a: for (var i = 0; i < abetxuko_florida_horarios.length; i++) {
				let d=abetxuko_florida_horarios[i];
				dtext=abetxuko_florida_horarios[i].toTimeString();
				dtext=dtext.split(' ')[0];
				alert("\n"+"El tranbia sale de "+abetxuko_florida[i]+" a las "+dtext+"\n");
				};

		case b: for (var i = 0; i < florida_abetxuko_horarios.length; i++) {
				let d=florida_abetxuko_horarios[i];
				dtext=florida_abetxuko_horarios[i].toTimeString();
				dtext=dtext.split(' ')[0];
				alert("El tranbia sale de "+abetxuko_florida[14-i]+" a las "+dtext+"\n");
				};

		case c: for (var i = 0; i < ibaiondo_universidad_horarios.length; i++) {
				let d=ibaiondo_universidad_horarios[i];
				dtext=ibaiondo_universidad_horarios[i].toTimeString();
				dtext=dtext.split(' ')[0];
				alert("El tranbia sale de "+ibaiondo_universidad[i]+" a las "+dtext+"\n");
				};

		case d: for (var i = 0; i < universidad_ibaiondo_horarios.length; i++) {
				let d=universidad_ibaiondo_horarios[i];
				dtext=universidad_ibaiondo_horarios[i].toTimeString();
				dtext=dtext.split(' ')[0];
				alert("El tranbia sale de "+ibaiondo_universidad[14-i]+" a las "+dtext+"\n");
				};
	}

}

let date1=new Date(2022,0,1,0,15);
mins=date1.getMinutes();


let date2=new Date(2022,0,1,7,0);
date2.setMinutes(date2.getMinutes()+mins);

function calcularHoras(abetxuko_florida_horarios,abetxuko_florida){

	let parada=prompt("Seleccione la parada");

	let date1=new Date(2022,0,1,0,15);
	mins=date1.getMinutes();


	document.write("El tranbia destino "+abetxuko_florida[14]+" va apasar por la parada "+abetxuko_florida[parada]+" a las:\n"+
			abetxuko_florida_horarios[parada]+"\n");
	
	let date2=abetxuko_florida_horarios[parada];
	for (var i = 0; i < 3; i++) {
		date2.setMinutes(date2.getMinutes()+mins);
		dtext=abetxuko_florida_horarios[parada].toTimeString();
		dtext=dtext.split(' ')[0];
		document.write(dtext);

	}

}

