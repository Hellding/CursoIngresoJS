function Mostrar()
{
//tomo la edad  
var edad;
	edad=document.getElementById("edad").value;
	edad=parseInt(edad)
	var eCivil=document.getElementById("estadoCivil").value;
	if(edad>=18&&eCivil=="Soltero")
	{
		alert("es Soltero y no es menor");
	}
}//FIN DE LA FUNCIÓN