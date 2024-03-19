// Simulação de dados de eventos esportivos
var eventos = [
    { id: 1, liga: "Brasileirão Serie A", time1: "Botafogo RJ", time2: "Flamengo", odd1: 1.75, oddEmpate: 3.00, odd2: 2.25 },
    { id: 2, liga: "NBA", time1: "Golden State Wariors", time2: "Chicago Bulls", odd1: 1.90, oddEmpate: 2.10, odd2: 1.95 }
];

$(document).ready(function() {
    // Renderizar os eventos na página
    eventos.forEach(function(evento) {
        var elementoEvento = `
            <div class="evento" data-id="${evento.id}">
                <h2>${evento.liga}</h2>
                <p>${evento.time1} vs ${evento.time2}</p>
                <p>Odds: ${evento.odd1} - ${evento.oddEmpate} - ${evento.odd2}</p>
                <button class="botao-aposta" onclick="apostar(${evento.id}, 'time1')">Apostar no ${evento.time1}</button>
                <button class="botao-aposta" onclick="apostar(${evento.id}, 'empate')">Apostar no Empate</button>
                <button class="botao-aposta" onclick="apostar(${evento.id}, 'time2')">Apostar no ${evento.time2}</button>
            </div>
        `;
        $("#eventos").append(elementoEvento);
    });
});

// Função para simular uma aposta
function apostar(eventoId, escolha) {
    var evento = eventos.find(function(evento) {
        return evento.id === eventoId;
    });

    var odd;
    var time;

    if (escolha === 'time1') {
        odd = evento.odd1;
        time = evento.time1;
    } else if (escolha === 'empate') {
        odd = evento.oddEmpate;
        time = "Empate";
    } else if (escolha === 'time2') {
        odd = evento.odd2;
        time = evento.time2;
    }

    // Simulação de uma aposta bem-sucedida
    if (Math.random() < 0.5) {
        alert(`Você apostou no ${time} com odd ${odd} e ganhou!`);
    } else {
        alert(`Você apostou no ${time} com odd ${odd} e perdeu!`);
    }
}
