function copyDiscord() {
    var copyText = document.getElementById("myDiscord");
    navigator.clipboard.writeText(copyText.value);
    alert("Discord " + copyText.value + " copiado com sucesso!");
}

function mail() {
    alert("Sua mensagem foi enviada com sucesso!");
}
