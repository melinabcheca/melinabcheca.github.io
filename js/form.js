const btnEnviarS = document.getElementById("btnEnviarS"); /* */


function obtenerCorreo()  {
    let c = document.getElementById("inputEmail").value;
    return c;
}

function enviar(e) {
    e.preventDefault();
    if (obtenerCorreo() === null) {
        alert("El correo no puede estar vacio");
    } else {
         alert("Fue enviada la solicitud a Steve.");
    }

}

btnEnviarS.onclick = enviar;
