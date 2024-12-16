let servicos = {
    "remoção de calosidades": "remocao_calosidades",
    "tratamento de onicomicose": "tratamento_onicomicose",
    "reflexologia podal": "reflexologia_podal",
    "tratamento ortese ungueal": "tratamento_ortese_ungueal",
    "tratamento verruga plantar": "tratamento_verruga_plantar",
    "manicure": "manicure",
    "peeling ungueal": "peeling_ungueal"
}
function capitalizeTexto(texto) {
    return texto
        .toLowerCase() // Garante que o restante esteja em minúsculas
        .split(' ') // Divide o texto em palavras
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)) // Capitaliza a primeira letra
        .join(' '); // Junta as palavras de volta
}

function criarLinkServico(servico) {
    return `<li> <a href="https://tavinv.github.io/portalterapiadospes/servicos.html?q=${servicos[servico]}">${capitalizeTexto(servico)}</a> </li>`;
}

// Barra de pesquisa do PC

const barraDePesquisa = document.getElementById("barra-busca-pc");

barraDePesquisa.addEventListener('input', () => {
    // Atualizar os resultados

    const pesquisa = barraDePesquisa.value.toLowerCase();
    const resultadosEL = document.getElementById("search-results-pc");
    resultadosEL.innerHTML = "";

    if (pesquisa != "") {

        let resultados = Object.keys(servicos).filter(servico =>
            servico.toLowerCase().includes(pesquisa.toLowerCase())
        );

        for (const resultado of resultados) {
            resultadosEL.innerHTML += criarLinkServico(resultado);
        }

    }
})

// Barra pesquisa mobile

const barraDePesquisaMobile = document.getElementById("barra-busca-mobile");

barraDePesquisaMobile.addEventListener("input", () => {
    const pesquisa = barraDePesquisaMobile.value.toLowerCase();
    const resultadosEL = document.getElementById("search-results-mobile");
    const resultadosUL_EL = document.getElementById("search-results-mobile-ul");

    resultadosEL.classList.remove("active")
    resultadosUL_EL.innerHTML = ""

    if (pesquisa != "") {
        resultadosEL.classList.add("active")
        let resultados = Object.keys(servicos).filter(servico =>
            servico.toLowerCase().includes(pesquisa.toLowerCase())
        );

        for (const resultado of resultados) {
            resultadosUL_EL.innerHTML += criarLinkServico(resultado)
        }
    }
})