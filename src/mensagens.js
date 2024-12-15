// Dicionário com as mensagens
let mensagens = {
    "remocao_calosidades": "Boa tarde! Vim pelo site do Portal Terapia dos Pés, gostaria de agendar um *Tratamento de remoção de calosidades*. Qual a sua disponibilidade?",
    "tratamento_onicomicose": "Boa tarde! Vim pelo site do Portal Terapia dos Pés, gostaria de agendar um *Tratamento de onicomicose*. Qual a sua disponibilidade?",
    "reflexologia_podal": "Boa tarde! Vim pelo site do Portal Terapia dos Pés, gostaria de agendar uma *Reflexologia podal*. Qual a sua disponibilidade?",
    "tratamento_ortese_ungueal": "Boa tarde! Vim pelo site do Portal Terapia dos Pés, gostaria de agendar um *Tratamento ortese ungueal*. Qual a sua disponibilidade?",
    "tratamento_verruga_plantar": "Boa tarde! Vim pelo site do Portal Terapia dos Pés, gostaria de agendar um *Tratamento de verruga plantar*. Qual a sua disponibilidade?",
    "manicure": "Boa tarde! Vim pelo site do Portal Terapia dos Pés, gostaria de agendar uma *Manicure*. Qual a sua disponibilidade?",
    "peeling_ungueal": "Boa tarde! Vim pelo site do Portal Terapia dos Pés, gostaria de agendar um *Peeling ungueal*. Qual a sua disponibilidade?"
}

// Função para mostrar o alert com a mensagem correspondente ao tratamento
function contato(tratamentoId) {
    // Verifica se o tratamento existe no dicionário
    if (mensagens[tratamentoId]) {
        const numeroWhatsApp = ""; // Número do WhatsApp
        const mensagem = encodeURIComponent(mensagens[tratamentoId]); // Codifica a mensagem para o URL
        const urlWhatsApp = `https://wa.me/5511972164021?text=${mensagem}`; // Cria o link de redirecionamento
        console.log(urlWhatsApp)
        // Redireciona para o WhatsApp
        window.location.href = urlWhatsApp;
    }
}
