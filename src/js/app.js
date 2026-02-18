const $form = document.querySelector('#form');

$form.addEventListener('submit', handlesubmit);

async function handlesubmit(event) {
    event.preventDefault();

    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'accept': 'application/json'
        }
    });

    if (response.ok) {
        $form.reset();

        const mensajeExito = document.createElement('section');
        mensajeExito.textContent = "Gracias por completar el formulario, estaré contactandote lo más pronto posible.";
        mensajeExito.classList.add('enviado'); 

        const ubicacionAqui = document.querySelector('#mensaje-exito');

        ubicacionAqui.insertAdjacentElement('beforebegin', mensajeExito);

        setTimeout(() => {
            mensajeExito.style.display = 'none';
        }, 5000);
    }
}

function downloadCV() {
    var language = document.getElementById("language").value;
    var filePath;

    if (language === "es") {
        filePath = "cv/español/Daniel Cos CV.pdf";
    } else if (language === "en") {
        filePath = "cv/ingles/Daniel Cos CV.pdf";
    }

    var downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", "Daniel Cos CV " + language + ".pdf");
    downloadLink.href = filePath;

    downloadLink.click();
}