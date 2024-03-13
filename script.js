const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");

const matriz_code = [
    ["e", "enter"], // indice  0
    ["i", "imes"], // indice 1
    ["a", "ai"], // indice 2
    ["o", "ober"], // indice 3
    ["u", "ufat"], // indice 4
];

function btnCifrar() {
    const texto = cifrar(campo_texto.value);
    // Expresión regular para letras minúsculas y espacios
    const validation = /^[a-z\s]+$/i;

    if (campo_texto.value.trim() === "") {
        // El campo está vacío
        alert('el campo no puede quedar vacio');
    } else if (validation.test(campo_texto.value)) {
        // El texto contiene solo letras minúsculas y espacios
        campo_mensaje.value = texto;
        campo_mensaje.style.backgroundImage = "none";
        limpiarCaja();

    } else {
        // Mostrar otro mensaje de error
            const inputElement = document.getElementById('texto-encriptado');
           inputElement.placeholder = 'No se permiten números ni caracteres especiales';
          
    }

    limpiarCaja();
}


function limpiarCaja() {
    document.querySelector('#texto-encriptado').value = '';
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
    // Expresión regular para letras minúsculas y espacios
    const validation = /^[a-z\s]+$/i;

    if (campo_texto.value.trim() === "") {
        // El campo está vacío
        alert('el campo no puede quedar vacio');
    } else if (validation.test(campo_texto.value)) {
        // El texto contiene solo letras minúsculas y espacios
        campo_mensaje.value = texto;
        campo_mensaje.style.backgroundImage = "none";
        limpiarCaja();
        
    } else {
        // Mostrar otro mensaje de error
            const inputElement = document.getElementById('texto-encriptado');
           inputElement.placeholder = 'No se permiten números ni caracteres especiales';
          
    }

    
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


async function btnCopiar() {
            // Selecciona el contenido del área de texto
        campo_mensaje.select();
        // Copia el contenido al portapapeles
        await navigator.clipboard.writeText(campo_mensaje.value);
        // Opcional: Puedes mostrar un mensaje de éxito o realizar otras acciones después de copiar
      
}

