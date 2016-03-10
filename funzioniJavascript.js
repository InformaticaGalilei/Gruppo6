/*
 *	Funzioni Javascript per la costruzione delle figure ed il funzionamento degli slider.
 *	
 */



function sliderX(val1){
document.getElementById('valx').innerHTML=val1;

}
function sliderY(val2){
document.getElementById('valy').innerHTML=val2;

}


function creaFigura(value){

a1=eval(document.getElementById("fx").value);
b1=eval(document.getElementById("fy").value);
var mioCanvas = document.getElementById("canvasProva");
var context = mioCanvas.getContext("2d");

context.beginPath();
context.clearRect(0,0,800,800);
context.closePath();

context.beginPath();
context.moveTo(0,0);
var t=0;
Bx = 200* Math.sin(a1 * t * 3.14/180);
By = -200 * Math.sin(b1 * t * 3.14 /180);
B1 = Bx+400;
B2 = -By+400;
context.moveTo(B1,B2);
for( var t = 1; t <= 360; t += 1)
{
Bx = 200* Math.sin(a1 * t * 3.14/180);
By = -200 * Math.sin(b1 * t * 3.14 /180);
B1 = Bx+400;
B2 = -By+400;
context.lineTo(B1,B2);
context.linewidth=5;
context.strokeStyle= "#FFFFFF";
context.stroke();
}
context. closePath();
}








