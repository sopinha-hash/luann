let eventos = [];
let eventoAtual = 0;

document.addEventListener('DOMContentLoaded', function() {
    carregarEventos();
    configurarBotoes();
});

function carregarEventos() {
    // Aqui você pode carregar de um arquivo JSON ou PHP
    eventos = [
        {
            data: "Janeiro 2024",
            titulo: "Primeiro dia de aula! 🎉",
            descricao: "A turma se conheceu e o professor deu as boas-vindas. Nervosismo e expectativa!",
            imagem: "https://via.placeholder.com/300x200/4ecdc4/ffffff?text=1º+Dia"
        },
        {
            data: "Fevereiro 2024",
            titulo: "Primeira prova 💪",
            descricao: "Todos estudando muito! Alguns choraram, outros riram... mas passamos!",
            imagem: "https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Prova"
        },
        {
            data: "Março 2024",
            titulo: "Trabalho em grupo 👥",
            descricao: "Formamos os times e descobrimos quem é o líder natural da turma!",
            imagem: "https://via.placeholder.com/300x200/667eea/ffffff?text=Grupo"
        }
        // ADICIONE MAIS EVENTOS AQUI!
    ];
    
    atualizarContador();
    mostrarEvento(0);
}

function configurarBotoes() {
    document.getElementById('btnInicio').onclick = () => mostrarEvento(0);
    document.getElementById('btnProximo').onclick = () => proximoEvento();
    document.getElementById('btnAnterior').onclick = () => anteriorEvento();
    document.getElementById('btnAleatorio').onclick = () => eventoAleatorio();
}

function mostrarEvento(index) {
    eventoAtual = index;
    
    const evento = eventos[index];
    const timeline = document.getElementById('timeline');
    const eventoAtualDiv = document.getElementById('eventoAtual');
    
    // Limpar timeline
    timeline.innerHTML = '';
    
    // Criar linha do tempo
    eventos.forEach((e, i) => {
        const ponto = document.createElement('div');
        ponto.className = `evento-ponto ${i === index ? 'active' : ''}`;
        ponto.style.left = `${(i / eventos.length) * 95}%`;
        timeline.appendChild(ponto);
    });
    
    // Mostrar evento atual
    eventoAtualDiv.innerHTML = `
        <div class="evento-conteudo">
            <h2>${evento.titulo}</h2>
            <p><strong>${evento.data}</strong></p>
            ${evento.imagem ? `<img src="${evento.imagem}" alt="${evento.titulo}">` : ''}
            <p>${evento.descricao}</p>
        </div>
    `;
    
    atualizarContador();
    atualizarBotoes();
}

function proximoEvento() {
    if (eventoAtual < eventos.length - 1) {
        mostrarEvento(eventoAtual + 1);
    }
}

function anteriorEvento() {
    if (eventoAtual > 0) {
        mostrarEvento(eventoAtual - 1);
    }
}

function eventoAleatorio() {
    const aleatorio = Math.floor(Math.random() * eventos.length);
    mostrarEvento(aleatorio);
}

function atualizarContador() {
    document.getElementById('numeroAtual').textContent = eventoAtual + 1;
    document.getElementById('totalEventos').textContent = eventos.length;
}

function atualizarBotoes() {
    const botoes = document.querySelectorAll('.btn-control');
    botoes.forEach(btn => btn.classList.remove('active'));
    
    if (eventoAtual === 0) {
        document.getElementById('btnInicio').classList.add('active');
    }
}