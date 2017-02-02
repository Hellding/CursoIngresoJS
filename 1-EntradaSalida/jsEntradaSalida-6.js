/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var uno;
	var dos;
	var conclusion;
	a=document.getElementById("numeroUno").value;
	b=document.getElementById("numeroDos").value;
	uno=parseInt(a);
	dos=parseInt(b);
	conclusion="la suma es"+ uno+dos ;
	alert(conclusion);
}