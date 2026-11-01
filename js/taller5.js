let formulario=document.getElementById("formTaller5");
let mensaje=document.getElementById("mensaje");

formulario.addEventListener("submit", calcular);

function calcular(){
    event.preventDefault();

    let numero1=parseFloat(document.getElementById("numero1").value);
    let numero2=parseFloat(document.getElementById("numero2").value);
    let operacion=document.getElementById("operacion").value;

    if (isNaN(numero1)){
        mensaje.innerText="ingrese los dos numeros";
        mensaje.className="error";
        return
    }

    if (isNaN(numero2)){
        mensaje.innerText="ingrese los dos numeros";
        mensaje.className="error";
        return
    }

    if (operacion.trim() == ""){
        mensaje.innerText="ingrese una operacion";
        mensaje.className="error";
        return
    }

    let resultado;

    switch (operacion){
        case "suma":
            resultado=numero1+numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;

        case "multiplicacion":
            resultado = numero1 * numero2;
            break;

        case "division":

            if (numero1 == 0 || numero2 ==0){
                mensaje.innerText="no se puede dividir por 0"
                mensaje.className="error";
                return;
            }

        resultado=numero1/numero2
    }

    function simboloOperacion(operacion) {
    switch (operacion) {
        case "suma":
            return "+";
        case "resta":
            return "-";
        case "multiplicacion":
            return "×";
        case "division":
            return "÷";
    }
    }
    mensaje.innerText=numero1 + " " + simboloOperacion(operacion) + " " + numero2 + " = " + resultado
    mensaje.className="exito"

}