/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var uno;
	var dos;
	var conclusion;
	uno=document.getElementById("numeroUno").value;
	dos=document.getElementById("numeroDos").value;
	uno=parseInt(uno);
	dos=parseInt(dos);
	conclusion=uno+dos;
	alert("la suma es "+conclusion);
}