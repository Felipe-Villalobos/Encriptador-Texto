const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");

const matriz_code = [
    ["e", "enter"], // indice  0
    ["i", "imes"], // indice 1
    ["a", "ai"], // indice 2
    ["o", "ober"], // indice 3
    ["u", "ufat"], // indice 4
];


/*function btnCifrar(){
  
    const texto = cifrar(campo_texto.value);
     // Expresión regular para letras minúsculas y espacios
     const validation = /^[a-z\s]+$/i;

     if (validation.test(campo_texto.value)) {
         // El texto contiene solo letras minúsculas y espacios
         return true;
     } else {
         // Mostrar un mensaje de error o realizar alguna acción
         alert("El texto debe contener solo letras minúsculas y espacios.");
         
     }
    campo_mensaje.value = texto;
    texto.value = "";
    campo_mensaje.style.backgroundImage = "none"; 

    return false;
}
*/
function btnCifrar() {

        const texto = cifrar(campo_texto.value);
        campo_mensaje.value = texto;
                texto.value = "";
        campo_mensaje.style.backgroundImage = "none"; 
             
}

function cifrar(fraseCifrada){
       
        for (let i = 0; i < matriz_code.length; i++) {
        if(fraseCifrada.includes(matriz_code[i][0])){
            fraseCifrada = fraseCifrada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return fraseCifrada;
}



function btnDescifrar(){
    const texto = descifrar(campo_texto.value);
    campo_mensaje.value = texto;
}

function descifrar(fraseDescifrada){
    for (let i = 0; i < matriz_code.length; i++) {
        if(fraseDescifrada.includes(matriz_code[i][1])){
            fraseDescifrada = fraseDescifrada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
    }
    return fraseDescifrada;
}