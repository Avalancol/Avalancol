function clear_name() {
    document.getElementById("NameElement").value = '';
}


function send_message() {
    let message = document.getElementById("MessageElement").value
    let name = document.getElementById("NameElement").value
    if (name=="") { name="Инкогнито"}
    if (message=="") { message="---пустое сообщение---"}
    let send_text = name + ": " + message
    document.getElementById("ChatElement").value = send_text;
    document.getElementById("MessageElement").value = '';

    console.log("Отправляемое в чат сообщение:\n" + send_text);
}
