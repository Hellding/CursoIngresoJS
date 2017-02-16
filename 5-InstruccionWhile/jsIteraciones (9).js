function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	var respuesta;
	var primera=true;
	respuesta=confirm("Quiere comenzar?")
	while(respuesta)
	{
		numero=prompt("");
		numero=parseInt(numero);
		if(primera)
		{
			maximo=numero;
			minimo=numero;
			primera=false;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero
			}
		}
		respuesta=confirm("quieres continuar?");
	}
	alert("el numero maximo es "+maximo)
	alert("el munero minimo es "+minimo)
}//FIN DE LA FUNCIÓN