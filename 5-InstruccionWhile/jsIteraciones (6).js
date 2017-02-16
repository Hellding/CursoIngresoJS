function Mostrar()
{
	var numer=0
	var contador;
	var acumulador=0;
while(numer<5)
	{
		numer++;
		contador=prompt("");
		contador=parseInt(contador);
		acumulador+=contador;
	}
	alert(acumulador);
	alert(acumulador/contador);
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN