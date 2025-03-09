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

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio!");
        return;
    }

    let sorteados = [...amigos]; // Cria uma cópia da lista original
    let resultadoFinal = [];

    let tentativas = 0;
    const maxTentativas = 30;

    do {
        embaralhar(sorteados);
        tentativas++;

        // Garante que ninguém se sorteie
    } while (sorteados.some((pessoa, i) => pessoa === amigos[i]) && tentativas < maxTentativas);

    if (tentativas >= maxTentativas) {
        alert("Erro ao sortear! Tente novamente.");
        return;
    }

    // Monta o resultado final
    resultadoFinal = amigos.map((pessoa, i) => `${pessoa} tirou ${sorteados[i]}`);

    // Exibir o resultado na tela
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = "";
    resultadoFinal.forEach((par) => {
        const item = document.createElement("li");
        item.textContent = par;
        resultadoElemento.appendChild(item);
    });
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}