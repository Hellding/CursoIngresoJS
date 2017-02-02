/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var uno;
	var dos;
	var resultado;
	uno=document.getElementById("sueldo").value;
	dos=1.10;
	uno=parseInt(uno);
	resultado=uno*dos;
	alert("el aumento es de "+resultado)
}
