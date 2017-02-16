function Mostrar()
{
	var numero;
	var contador=0;
	//declarar contadores y variables 
	var positivos;
	var negativos;
	var cantpos=0;
	var cantneg=0;
	var cantdeo=0;
	var cantdenpares=0;
	var promdepos;
	var promdeneg;
	var respuesta="si";
	respuesta=prompt("comenzar el programa?")
	while(respuesta!="no")
	{
		numero=prompt("");
		numero=parseInt(numero);
		if(numero>0)
		{
			cantpos++;
			positivos+=numero;
			promdepos/=numero;
		}
		if(numero<0)
		{
			cantneg++;
			negativos+=numero;
			promdeneg/=numero;
		}
		if(numero=0)
		{
			cantdeo++;
		}
		if(numero%2==0)
		{
			cantdenpares++;
		}
	respuesta=confirm("quieres continuar?")
	}
	alert("la suma de los negativos es "+negativos)
	alert("la suma de los positivos es "+positivos)
	alert("la cantidad de positivos es de "+cantpos)
	alert("la cantidad de negativos es de "+cantneg)
	alert("la cantidad de 0 es de "+cantdeo)
	alert("la cantidad de numeros pares es de "+cantdenpares)
	alert("el promedio de numeros positivos es de "+promdepos)
	alert("el promedio de numeros negativos es de "+promdeneg)
	alert("la diferancia entre posistivos y negativos es de "+posistivos-negativos)
}//FIN DE LA FUNCIÓN