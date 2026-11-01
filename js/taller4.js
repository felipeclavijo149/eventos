let formulario = document.getElementById("formTaller4");
let resultado= document.getElementById("resultado");

formulario.addEventListener("submit", validarRegistro);

function validarRegistro(){
    event.preventDefault();

    let nombre=document.getElementById("nombre").value;
    let edad=parseInt(document.getElementById("edad").value);
    let email=document.getElementById("correo").value;
    let password=document.getElementById("clave").value;
    let confirmar=document.getElementById("confirmar").value;

    if (nombre.trim() == ""){
        resultado.innerText="escribe tu nombre";
        resultado.className="error";
        return
    }

    if (isNaN(edad)){
        resultado.innerText="Escribe tu edad.";
        resultado.className="error";
        return
    }

    if (edad<18 || edad>100){
        resultado.innerText="ingrese una edad valida";
        resultado.className="error";
        return
    }

    if ( !email.includes("@") || !email.includes(".")){
        resultado.innerText="escriba un correo valido";
        resultado.className="error";
        return
    }

    if (password !== confirmar){
        resultado.innerText="las contraseñas no coinciden";
        resultado.className="error";
        return
    }

    resultado.innerText=`registro exitoso. Bienvenoido(a), ${nombre}`;
    resultado.className="exito"
}