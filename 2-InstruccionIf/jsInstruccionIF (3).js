function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById("edad").value;
edad=parseInt(edad)
if(edad>18){alert("sos mayor de edad")}
if(edad<18){alert("sos menor de edad")}

}//FIN DE LA FUNCIÓN