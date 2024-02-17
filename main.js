document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let campoA = parseInt(document.getElementById("campoA").value);
    let campoB = parseInt(document.getElementById("campoB").value);

    if (campoB > campoA) {
        alert("Formulário válido! B é maior que A.");
    } else {
        alert("Formulário inválido! B não é maior que A.");
    }
});
.