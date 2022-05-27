

//utilizo el sorteo addEventListener en vez de un onclick amor
let Inscribirse= document.getElementById("inscripcion").addEventListener("click", guardarSorteos)//viste este "click" bueno ahi produce el evento del boton
//eso si, hago un boton en el html y le conecto con el getElementById

//hacemos un array para ir guardando las suscripciones
sorteos= []
sorteos.push(["marcos javier", "3", "monte8@hotmail.com", "2"])//esto lo hacemos como una prueba


//empezamos con la PRIMERA funcion para CONECTAR otras funciones y AGREGAR validaciones frukis trukis
function guardarSorteos(){
//hacemos las variables que conectan con los diferentes campos
  let nombre= document.getElementById("nombre").value;
  let email= document.getElementById("correo").value;
  let sorteo=document.getElementById("sorteostip").value;
  let sexo= document.getElementById("sexopersona").value;
  let divAlert=document.querySelector( '[name="alertsorteo"] '); 

  //empezamos a VALIDAR los diferentes campos que tenemos  con el IF y la funcion que hicimos para validar(acordate de eso mi corazon)
  if(!validarNombre(nombre)){
    showAlert("error", "nombre incorrecto", divAlert);
    return;
}

  if(!validaremail(email)){
    showAlert("error", "email incorrecto", divAlert);  
    return;
 }

 if(!existeSuscriptorAsorteo(email,sorteo)){
  showAlert("error","usted ya esta registrado en este sorteo", divAlert);
  return;
} 
//aca es diferente ¿por que? porque en el selec del html, a las opciones les puse un value, masculino era 2 y femenino 3
// te preguntaras ¿por que no empieza de uno bombola? y porque para que se vea bien esteticamente le deje en blanco el primer valor bombolo.

if(!validarSexo(sexo)){
  showAlert("error","ingrese el sexo", divAlert);
  return;
} 


//si paso todas las validaciones entonces el usuario esta registrado, mostramo la alerta
   showAlert("valido","sorteo registrado", divAlert);

//vamos guardando los datos 
guardarDatos(nombre,sexo,email, sorteo)

//calculamos el porcentaje F o M
calcularPorcentajesPorSexo() 

}   



//VALIDACIONES
function validarNombre(nombre){

  PATRON= /^[a-zA-Z]+\s+[a-zA-Z]+\D/

  if(!PATRON.test(nombre)){

    return false;

  }
      return true;

}

//VALIDACIONES
function validaremail(email){

 

  PATRON= /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  if(!PATRON.test(email)){

    return false;

  }
      return true;

}

//VALIDACIONES
function validarSexo(sexo) {

  if(sexo=="2"){
    return true
    
  }
  if(sexo=="3"){
    return true
  } 
  return false
}

//hacer funcion para ver si el usuario ingresa con el mismo email a un sorteo
function existeSuscriptorAsorteo(email,sorteo){

  //ir recorriendo el array
  for (let index=0; index<sorteos.length; index++){
     let correoexis=sorteos[index][2];
     let tiposorteo=sorteos[index][3];

     switch (tiposorteo) {
      case 1:
        sorteo= "Automovil"
        break;
        case 2:
        sorteo= "Smart TV"
        break;
        case 3:
        sorteo= "Iphone 13"
        break;
        case 4:
        sorteo= "Casa"
        break;
        case 4:
        sorteo= "1000000"
        break;
      default:
        break;
    }     
  
   
     if(email===correoexis && sorteo===tiposorteo ){
         
          return false; 
  }
 }
 
    return true;
  
} 


function guardarDatos() {

  let nombre= document.getElementById("nombre").value;
  let email= document.getElementById("correo").value;
  let sorteo=document.getElementById("sorteostip").value;
  let sexo= document.getElementById("sexopersona").value;

   let  guardarDatos=[];
   

  
   existeSuscriptorAsorteo(email,sorteo)
  
   validarNombre(nombre)
   
   validaremail(email)

   validarSexo(sexo)
   
   
   guardarDatos.push(nombre)
  
   guardarDatos.push(sexo)

   guardarDatos.push(email)
  
   guardarDatos.push(sorteo)

   console.log(guardarDatos)

   sorteos.push(guardarDatos) 
   

}



  function calcularPorcentajesPorSexo(){
    let femenino=1
    let masculino=1
  
    for (let i=0;  i<sorteos.length; i++){
        femenino=femenino+1
        masculino=masculino+1
        if (sorteos[i][1] == 2){
            femenino =++femenino
        } else if (sorteos[i][1] == 3){
            masculino=++masculino
        }
    }
    let totalMyF=femenino+masculino
    let porcentajesuscripMujeres = (femenino/totalMyF)*100;
    let porcentajesuscripHombres = (masculino/totalMyF)*100;
    
    console.log('suscripciones de mujeres ' ,porcentajesuscripMujeres, '% suscripciones de hombres ' ,porcentajesuscripHombres, '%')
    
} 

function showAlert(tipo, mensaje, divElemento){
  divElemento.innerHTML=mensaje;
  switch(tipo){
      case "error":
          divElemento.className= "alert alert-danger";
          break;
      case "valido":
          divElemento.className= "alert alert-success";
          break;  

  }
  divElemento.hidden=false;
  setTimeout(function(){
   divElemento.hidden=true;
  }, 3000 );
  
}




  

