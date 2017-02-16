function Mostrar()
{
	var contador=0;
	var numero;
	var acumulador=0;
	var respuesta="si";
	respuesta=confirm("quieres comenzar?");
	while(respuesta)
	{
		numero=prompt("");
		numero=parseInt(numero);
		acumulador+=numero;
		contador++;
		respuesta=confirm("quieres continuar?");
	}
	alert(acumulador);
	alert(acumulador/contador);
document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/contador;
}//FIN DE LA FUNCIÓN