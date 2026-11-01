let  formulario=document.getElementById("formTaller1");
let resultado= document.getElementById("resultado");

formulario.addEventListener("submit", taller1);

function taller1(){
    event.preventDefault();

    let numero =parseFloat(document.getElementById("numero").value);

    //Validar de que nuemero no sea nula o invalida isNaN
    if (isNaN(numero)){
        resultado.innerText="escribe un numero";
        resultado.className="error";
        return
    }
    else if (numero % 1 !== 0){
        resultado.innerText="escribe un numero entero";
        resultado.className="error";
        return
    }
    else if (numero %2 ==0){
        resultado.innerText="el numero es par";
        resultado.className="exito";
    }
    else{
        resultado.innerText="el numero es impar";
        resultado.className="exito";
    }
}