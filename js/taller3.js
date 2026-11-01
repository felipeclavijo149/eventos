let formuario = document.getElementById("formTaller3");
let resultado = document.getElementById("resultado");

formuario.addEventListener("submit", taller3);

function taller3(){
    event.preventDefault();

    let numero1=parseInt(document.getElementById("numero1").value);
    let numero2=parseInt(document.getElementById("numero2").value);
    let numero3=parseInt(document.getElementById("numero3").value);
    let mayor;

    if (isNaN(numero1)){
        resultado.innerText="ingrese uno de los tres numeros";
        resultado.className="error";
        return
    }

    if (isNaN(numero2)){
        resultado.innerText="ingrese uno de los tres numeros";
        resultado.className="error";
        return
    }
    
    if (isNaN(numero3)){
        resultado.innerText="ingrese uno de los tres numeros";
        resultado.className="error";
        return
    }

    if (numero1 === numero2 && numero2===numero3){
        resultado.innerText="los tres numero son iguales";
        resultado.className="exito";
        return
    }

    if (numero1>numero2 && numero1>numero3){
        mayor=numero1;
    }
    else if( numero2>numero3 && numero2>numero1){
        mayor=numero2;
    }
    else{
        mayor=numero3;
    }

    resultado.innerText=`el numero mayor es ${mayor}`;
    resultado.className="exito";
}