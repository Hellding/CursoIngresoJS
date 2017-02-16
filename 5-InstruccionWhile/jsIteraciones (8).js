function Mostrar()
{

var contador=0;
var numero;
var positivo=0;
var negativo=1;	
var respuesta='si';
respuesta=confirm("quieres comenzar?");
while(respuesta)
	{
	numero=prompt("");
	numero=parseInt(numero);
	contador++;
		if(numero>=0)
		{
			positivo+=numero;
		}
		else(numero<0)
		{
			negativo*=numero;
		}
	respuesta=confirm("quieres continuar?")
	}
	alert("la suma de los positivos es "+positivo)
	alert("el producto de los negativos es "+negativo*contador)
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN