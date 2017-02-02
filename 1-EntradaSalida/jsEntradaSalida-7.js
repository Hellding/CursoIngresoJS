/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	var uno;
	var dos;
	var conclusion;
	uno=document.getElementById("numeroUno").value;
	dos=document.getElementById("numeroDos").value;
	uno=parseInt(uno)
	dos=parseInt(dos)
	conclusion=uno-dos
	alert("la resta es "+conclusion)
}

function multiplicar()
{ 
	var uno;
	var dos;
	var conclusion;
	uno=document.getElementById("numeroUno").value;
	dos=document.getElementById("numeroDos").value;
	uno=parseInt(uno)
	dos=parseInt(dos)
	conclusion=uno*dos
	alert("la multiplicacion es "+conclusion)
}

function dividir()
{
	var uno;
	var dos;
	var conclusion;
	uno=document.getElementById("numeroUno").value;
	dos=document.getElementById("numeroDos").value;
	uno=parseInt(uno)
	dos=parseInt(dos)
	conclusion=uno/dos
	alert("la division es "+conclusion)
}

