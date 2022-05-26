

//utilizo el evento addEventListener en vez de un onclick amor
let Inscribirse= document.getElementById("inscripcion").addEventListener("click", eventospersonas)//viste este "click" bueno ahi produce el evento del boton
//eso si, hago un boton en el html y le conecto con el getElementById

//hacemos un array para ir guardando las suscripciones
suscripciones= []
suscripciones.push(["ariela romero", "3", "arielarom18@hotmail.com", "1"])//esto lo hacemos como una prueba


//empezamos con la PRIMERA funcion para CONECTAR otras funciones y AGREGAR validaciones frukis trukis
function eventospersonas(){
//hacemos las variables que conectan con los diferentes campos
  let nombre= document.getElementById("nombre").value;
  let email= document.getElementById("correo").value;
  let evento=document.getElementById("eventostip").value;
  let sexo= document.getElementById("sexopersona").value;
  let divAlert=document.querySelector( '[name="alertevento"] '); 

  //empezamos a VALIDAR los diferentes campos que tenemos  con el IF y la funcion que hicimos para validar(acordate de eso mi corazon)
  if(!validarNombre(nombre)){
    showAlert("error", "nombre incorrecto", divAlert);
    return;
}

  if(!validaremail(email)){
    showAlert("error", "email incorrecto", divAlert);  
    return;
 }

 if(!existeSuscriptorAEvento(email,evento)){
  showAlert("error","usted ya esta registrado en este evento", divAlert);
  return;
} 
//aca es diferente ¿por que? porque en el selec del html, a las opciones les puse un value, masculino era 2 y femenino 3
// te preguntaras ¿por que no empieza de uno bombola? y porque para que se vea bien esteticamente le deje en blanco el primer valor bombolo.

if(!validarSexo(sexo)){
  showAlert("error","ingrese el sexo", divAlert);
  return;
} 


//si paso todas las validaciones entonces el usuario esta registrado, mostramo la alerta
   showAlert("valido","evento registrado", divAlert);

//vamos guardando los datos 
guardarDatos(nombre,sexo,email, evento)

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


function existeSuscriptorAEvento(email,evento){

  
  for (let index=0; index<suscripciones.length; index++){
     let correoexis=suscripciones[index][2];
     let tipoevento=suscripciones[index][3];
     
//
     switch (tipoevento) {
      case 1:
        evento= "teatro"
        break;
        case 2:
        evento= "cine"
        break;
        case 3:
        evento= "concierto"
        break;
      default:
        break;
    }     
  
   
     if(email===correoexis && evento===tipoevento ){
         
          return false; 
  }
 }
 
    return true;
  
} 


function guardarDatos() {

  let nombre= document.getElementById("nombre").value;
  let email= document.getElementById("correo").value;
  let evento=document.getElementById("eventostip").value;
  let sexo= document.getElementById("sexopersona").value;

   let  guardarDatos=[];
   

  
   existeSuscriptorAEvento(email,evento)
  
   validarNombre(nombre)
   
   validaremail(email)

   validarSexo(sexo)
   
   
   guardarDatos.push(nombre)
  
   guardarDatos.push(sexo)

   guardarDatos.push(email)
  
   guardarDatos.push(evento)

   console.log(guardarDatos)

   suscripciones.push(guardarDatos) 
   

}



  function calcularPorcentajesPorSexo(){
    let femenino=1
    let masculino=1
  
    for (let i=0;  i<suscripciones.length; i++){
        femenino=femenino+1
        masculino=masculino+1
        if (suscripciones[i][1] == 2){
            femenino =++femenino
        } else if (suscripciones[i][1] == 3){
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




  

