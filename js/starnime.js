function exibir_menu() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

function validate() {
	if (!has_text("nome"))      return false;
	if (!has_text("sobrenome")) return false;
	if (!has_text("mensagem"))  return false;

	return true;
}

function has_text(id) {
	obj = document.getElementById(id).value;

	if (obj == "" || obj == null) {
		document.getElementById("erro").innerHTML = "Erro no campo " + id;
		document.getElementById("alert").style.display = "block";
		return false;
	}

	return true;
}