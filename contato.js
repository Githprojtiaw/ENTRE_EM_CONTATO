const form = document.getElementById('form_enviarMsg');

function sendEmail(envio){
    envio.preventDefault();

    let e = document.getElementById('email').value;
    let n = document.getElementById('name').value;
    let t = document.getElementById('phone').value;
    let m = document.getElementById('message').value;

    Email.send({
        SecureToken : "aec9c5bd-e2f9-47d4-abcc-2b8e7ecd2faf",
        To : "githprojtiaw@gmail.com",
        From : e,
        Subject : "Mensagem",
        Body : `Nome: ${n}
                <br> Email: ${e}
                <br> Telefone: ${t}
                <br> Mensagem: ${m}`
    }).then(message => {
        return alert("Mensagem enviada com sucesso!");
    });

    form.reset();
}

form.addEventListener('submit',sendEmail);
