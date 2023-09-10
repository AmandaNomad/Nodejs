//(function()


document.getElementById("idBtnEnviar").addEventListener("click", function(){
    let strEmail = document.getElementById("mail").value;
    let strMensaje = document.getElementById("mensaje").value;

    if (strEmail != "" && strMensaje != "") {
        let datos =
        {
            c: strEmail,
            m: strMensaje
        };

        fetch("https://nodejsfirstamanda.onrender.com/api/email", {
            method: "POST",
            body: JSON.stringify({
                toMail: strEmail,
                subject: "Contacto de sitio",
                message: strMensaje
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then((response) => response.json())
            .then((json) => console.log(json));
        
    } else {
        alert("Por favor rellenar todos los campos");
    }

});
