/*
console.log('test');


var respuesta = prompt ( "Juega piedra papel o tijera" );

var piedra = "piedra";
var tijera = "tijera";
var papel = "papel";

console.log(piedra);

if (piedra != respuesta) {
document.write("Pusiste "+ respuesta +" yo digo " + "piedra y perdí");

}else{
document.write(" Yo tambien tire piedra volvamos a jugar empatamos");

}
if (piedra = tijera && piedra == respuesta) {
	document.write(" Pusiste "+ respuesta +" yo digo piedra gané");

}

*/

/*
do {
	var contrasena = prompt ("ingresa tu contraseña");
	//document.write("esta no es tu contraseña nooooo!!!!");

}while (contrasena !== "contraseña" );
document.write(contrasena);
*/
var juego_compu=["papel","piedra","tijeras"];
var tomas_elseñor= prompt("¿PIEDRA,PAPEL O TIJERA?");
console.log("tomas:"+tomas_elseñor);

numero_random=parseInt(Math.random()*3);
console.log(numero_random);

pepe=juego_compu[numero_random];
 console.log("pepe:"+pepe)

// situacion numero 1
if (tomas_elseñor == pepe) {

 console.log("empate")
}

// situacion numero 2 perdemos

if ((tomas_elseñor == "piedra" && pepe == "papel") || (tomas_elseñor == "tijeras" && pepe == "piedra") || (tomas_elseñor == "papel" && pepe== "tijeras") ) {
 console.log("pepe te gano")
}

// situacion numero 3 ganamos


if ((tomas_elseñor == "papel" && pepe == "piedra") || (tomas_elseñor == "piedra" && pepe == "tijeras") || (tomas_elseñor == "tijeras" && pepe== "papel") ) {
 console.log("pepe perdio")
}