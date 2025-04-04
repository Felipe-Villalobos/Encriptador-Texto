const campo_texto = document.querySelector("#texto-encriptado");
const campo_mensaje = document.querySelector("#campo-mensaje");

const matriz_code = [
    
    ["i", "imes"], // indice  0
    ["a", "ai"], // indice 1
    ["o", "ober"], // indice 2
    ["u", "ufat"],// indice 3
    ["e", "enter"], // indice 4
];

function btnCifrar() {
    const texto = campo_texto.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco al inicio y al final
    const validation = /^[a-z\s]+$/; // Expresión regular para letras minúsculas y espacios

    if (texto === "") {
        // El campo está vacío
        alert('El campo no puede quedar vacío');
    } else if (!validation.test(texto)) {
        // El texto contiene caracteres no permitidos
        alert('Solo se permiten letras minúsculas');
    } else {
        // El texto es válido, cifrarlo
        campo_mensaje.value = cifrar(texto);
        campo_mensaje.style.backgroundImage = "none";
        limpiarCaja();
    }
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
    const texto = campo_texto.value.trim(); // Obtener el valor del campo y eliminar espacios en blanco al inicio y al final
    const validation = /^[a-z\s]+$/; // Expresión regular para letras minúsculas y espacios

    if (texto === "") {
        // El campo está vacío
        alert('El campo no puede quedar vacío');
    } else if (!validation.test(texto)) {
        // El texto contiene caracteres no permitidos
        alert('Solo se permiten letras minúsculas');
    } else {
        // El texto es válido, descifrarlo
        campo_mensaje.value = descifrar(texto);
        campo_mensaje.style.backgroundImage = "none";
        limpiarCaja();
    }
}

function descifrar(fraseDescifrada) {
    let fraseAnterior;
    do {
        fraseAnterior = fraseDescifrada;
        for (let i = 0; i < matriz_code.length; i++) {
            fraseDescifrada = fraseDescifrada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            );
        }
    } while (fraseAnterior !== fraseDescifrada); // Se repite hasta que ya no haya cambios

    return fraseDescifrada;
}


async function btnCopiar() {
            // Selecciona el contenido del área de texto
        campo_mensaje.select();
        // Copia el contenido al portapapeles
        await navigator.clipboard.writeText(campo_mensaje.value);
        // Opcional: Puedes mostrar un mensaje de éxito o realizar otras acciones después de copiar
      
}

function autoResize() {
    const textarea1 = document.getElementById('texto-encriptado');
    const textarea2 = document.getElementById('campo-mensaje');

    // Verificar el ancho de la pantalla
    if (window.innerWidth < 1366){

    textarea1.style.height = 'auto'; // Restaurar la altura predeterminada
    textarea1.style.height = textarea1.scrollHeight + 'px'; // Ajustar la altura según el contenido
    
    
    textarea2.style.height = 'auto'; // Restaurar la altura predeterminada
    textarea2.style.height = textarea2.scrollHeight + 'px'; // Ajustar la altura según el contenido
    textarea2.style.backgroundImage = "none";
    }
    
}

