function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById("hora").value;
if(laHora>=7&&laHora<=11)
	{
		alert("Es de mañana")
	}
	else if(laHora>=12&&laHora<=19)
	{
		alert("Es de tarde")	
	}
	else if(laHora>=20&&laHora<=24)||(laHora>=0&&laHora<=6)
	{
		alert("es de noche")
	}
	else if
	{
		alert("la hora no existe")
	}
}//FIN DE LA FUNCIÓN