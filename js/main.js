function validateNombr(evn){
    var nombre = document.getElementById("name").value;
    if(nombre.length==0){
        producePrompt("Escribe tu nombre","red");
        return false;
    }
}
function producePrompt(mensaje,ubicacion,color){
    document.getElementById(ubicacion).innerHTML=mensaje;
    document.getElementById(ubicacion).style.color= color;
    
}
//VALIDACION DE NOMBRE
 /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/

function validateNombre(evento){
    //convierte la primera letra en mayuscula.
        var nombre = document.getElementById("name").value;
    
    
        var nombreArray = nombre.split("");
        var primeraLetra = nombreArray[0];
        var mayuscula = primeraLetra.toUpperCase();
        var separacion= false;
      
        for(var i=1; i<nombreArray.length; i++){
            if(separacion)
            {    
                mayuscula+= nombreArray[i].toUpperCase();
                
            }
            else
                mayuscula+=nombreArray[i];
            if(nombreArray[i] == " ")
                separacion= true;
            
        }
       document.getElementById("name").value = mayuscula;
   
}
function validateName(event){
    numeros= window.event.keyCode;
    if((numeros>=65 && numeros<=90)||numeros==8||numeros==32){
            
        } else{
            event.preventDefault();
        }
}
 /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
  
//VALIDACION DE APELLIDO
//----------------valida el apellido segun el formato valido.
function validateApellido(event){
    
        var apellido = document.getElementById("lastname").value;
        
        var apellidoArray = apellido.split("");
        var primeraLetra = apellidoArray[0];
        var mayuscula = primeraLetra.toUpperCase();
        var separacion = false;
      
        for(var i=1;i<apellidoArray.length;i++){
            if(separacion)
            {    
                mayuscula+= apellidoArray[i].toUpperCase();
                separacion = false;
            }
            else
                mayuscula+=apellidoArray[i];
            if(apellidoArray[i] == " ")
                separacion = true;
            
        }
       document.getElementById("lastname").value = mayuscula; 
}

function validateLastname(event){
    numeros= window.event.keyCode;
    if((numeros>=65 && numeros<=90)||numeros==8||numeros==32){
            
        } else{
            event.preventDefault();
        }
}
//VALIDACION DE EMAIL.

//valida email segun sea el formato valido al igual que en el apellido.    
function validateEmail(evento){
    
  var email = document.getElementById("email").value;
  var correo = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   
 
    if(!correo.test(email)){
      alert ("Correo inválido. Ejemplo: name@enlace.ku");
     
    }else{
      return false;  
    }
}

//VALIDACION DE CONTRASEÑA
//El campo password debe tener al menos 6 caracteres
//El campo password no puede ser igual a "password" ó "123456" ó "098754" 
    
document.getElementById("input-password").setAttribute("minlength","6");

  function validatePass(evento){
      var pass=document.getElementById("input-password").value;
      
      if(pass==="123456"||pass==="098754"||pass==="password"){
          alert("Password ingresado no válido");
          return false;
      }
  }
//VALIDACIONN DE SELECTOR---------------------- //ENVIAR TIPO DE BICICLETA SOLO AL PRESIONAR "REGISTRAR"

function validateSelector(evento){
    var selector= document.querySelector("select").value;
    
    if(selector==0){
        alert("Tienes que seleccionar una opcion");
        
    }
}

function validateForm(){
    validateSelector();
}

