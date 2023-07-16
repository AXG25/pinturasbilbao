/*-----------------Constantes y variables ----------*/

/*-----------------QUERY SELECTORS--------------*/
const nombreUsuario = document.querySelector('.nombreUsario');
const direccionUsuario = document.querySelector('.direccionUsario');
const telefonoUsario = document.querySelector('.telefonoUsario');
const ubicacionUsario = document.querySelector('.ubicacionUsario');
const btnCotizar = document.querySelector('.cotizar');

/*----------FUNCIONES-------------------*/
const cotizar = (event) => {
    event.preventDefault();
    console.log(nombreUsuario.value);
    if (nombreUsuario.value !== "" && direccionUsuario.value !== "" && telefonoUsario.value !== "" && ubicacionUsario.value !== "") {
        const email = 'axiever.guejia@gmail.com'; // Cambiar por la dirección de correo del destinatario
        const subject = 'Quiero hacer una cotizacion'; // Asunto del correo

        let mensaje = `Hola, mi nombre es ${nombreUsuario.value}.`;
        mensaje += `\n\nTe escribo desde el correo: ${direccionUsuario.value}.`;
        mensaje += `\n\nPuedes comunicarte conmigo al: ${telefonoUsario.value}.`;
        mensaje += `\n\nMi dirección es: ${ubicacionUsario.value}.`;

        // Construir el enlace de correo
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mensaje)}`;

        window.location.href = mailtoLink;
    } else {
        alert('Debe completar los campos.');
    }
};

/*---------ADDEVENTLISTENERS------------------*/
btnCotizar.addEventListener('click', cotizar);
