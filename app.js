let amigos = [];

function adicionarAmigo() {
    const input = document.querySelector("#amigo"); // Captura o campo de input
    const nome = input.value.trim(); // Remove espaços extras

    if (nome === "") {
        alert("Digite um nome válido.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    input.value = ""; // Limpa o campo após adicionar

    atualizarLista();
}

function atualizarLista() {
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((nome) => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}