"use strict";
var forma = document.getElementById("forma"),
    salidaTortas = document.getElementById("salidaTortas"),    
    tortas = forma["tortas"];
       
tortas.addEventListener("change", validaTortas, false);    

 

function validaTortas(){
    var opciones = tortas.options, 
        TortasSeleccionados = new Array();
    for (var i = 0, total= opciones.length; i < total; i++) {
        var torta = opciones[i];
        if (torta.selected){
          TortasSeleccionados.push(torta.value);  
        }
    }
    salidaTortas.textContent = TortasSeleccionados.join(" + ");
}

function procesa(){
    var opciones = tortas.options,
            suma = torta.value + torta.value
    salidaTortas.textContent = TortasSeleccionadas.join("suma")
}
