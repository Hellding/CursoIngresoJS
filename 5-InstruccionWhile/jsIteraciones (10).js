function Mostrar()
{
var num;
var acumpos=0;acumneg=0
var cantp=0;cantn=0;cantc=0;cantpar=0
while(confirm(""))
{
num=prompt("");
num=parseInt(num);
	if(num>0)
	{
	acumpos=num;
	cantp++;
	}
	else if(num<0)
	{
	acumneg=num;
	cantn++;
	}
	else if(num=0)
	{
	cantc++;
	}
	if(num%2==0)
	{
	cantpar++;
	}
}
document.write(acumpos/cantp);
document.write(acumneg/cantn);
document.write(acumpos-acumneg);
}//FIN DE LA FUNCIÓN
