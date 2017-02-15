/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lampara;
 	lampara=document.getElementById("Cantidad").value;
 	lampara=parseInt(lampara);
 	var precio;
 	precio=parseInt(35)
 	var resultado;
 	resultado=(lampara*precio)
 	var resultado2;
 	var resultado3;
 	var marca;
 	marca=document.getElementById("Marca").value;
 	if(lampara>=6)
 	{
 		resultado2=(resultado*0.5);
 		alert("el precio es de "+resultado);
 	}
 	else if(lampara==5&&marca=="ArgentinaLuz")
 	{
 		resultado2=(resultado*0.6);
 		alert("el precio es de "+resultado);
 	}
 	else if(lampara==5)
 	{
 		resultado2=(resultado*0.7);
 		alert("el precio es de "+resultado);
 	}
 	else if(lampara==4&&marca=="ArgentinaLuz"||marca=="FelipeLamparas")
 	{
 		resultado=(lampara*precio)*0.75;
 		alert("el precio es de "+resultado);
 	}
 	else if(lampara==4)
 	{
 		resultado2=(resultado*0.8);
 		alert("el precio es de "+resultado);
 	}
 	else if(lampara==3&&marca=="ArgentinaLuz")
 	{
		 resultado=(lampara*precio)*0.85;
		 alert("el precioes de "+resultado);	
 	}
 	else if(lampara==3&&marca=="FelipeLamparas")
 	{
 		resultado=(lampara*35)*0.9;
 		alert("el precio es de "+resultado)
 	}
 	else if(lampara==3)
 	{
 		resultado2=(resultado*0.95);
 		alert("el precio es de "+resultado)
 	}
 	if(resultado2>120)
 	{
 		resultado3=(resultado2*0.1)
 		alert("el precio bruto es de "+resultado3)
 	}	
}
