let formulario=document.getElementById("formTaller2");
let resultado=document.getElementById("resultado");

formulario.addEventListener("submit", taller2);

function taller2(){
    event.preventDefault();

    let nota=parseFloat(document.getElementById("nota").value);
    let desempeno;
    let estado="Aprobado";
    resultado.className="exito";

    if (isNaN(nota)){
        resultado.innerText="escribe una nota";
        resultado.className="error";
        return
    }
    else if(nota<0 || nota>5){
        resultado.innerText="La nota debe estar entre 0.0 y 5.0.";
        resultado.className="error";
        return
    }
    else if(nota>=4.5){
        desempeno="excelente";
    }
    else if(nota>=4){
        desempeno="bueno";
    }
    else if(nota>=3){
        desempeno="Aceptable";
    }
    else{
        desempeno="insuficiente";
        estado="no Aprobado";
            resultado.className="error";
    }

    resultado.innerText=`Nota:${nota}:desempeño ${desempeno} resultado.${estado}`

}