// 1. Simulação de dados (Array de Objetos)
const livrosEncontrados = [
    { id: 1, titulo: "JoJo's Bizzare Adventure Stell Ball Run - Volume 1", autor: "Hirohiko Araki", disponivel: true, capa: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_jdblsn20cd1vt929ifqeksua5m/-S897-f.webp" },

    { id: 2, titulo: "Kimetsu no Yaiba Demon Slayer - Volume 12", autor: "Koyoharu Gotouge", disponivel: true, capa: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_82db58063l7kf8j47r9i0k8r6v/-S897-FWEBP" },

    { id: 3, titulo: "Bleach - Volume 24", autor: "Tite Kudo", disponivel: true, capa: "https://m.media-amazon.com/images/I/91mvG0y1AqL.jpg" },

    { id: 4, titulo: "Chainsaw Man - Volume 1", autor: "Tatsuki Fujimoto", disponivel: true, capa: "https://m.media-amazon.com/images/I/71wp0XTXsAL.jpg" },

    { id: 5, titulo: "Sense Life - Volume 1", autor: "Caio Ulisses", disponivel: true, capa:"https://m.media-amazon.com/images/I/61gMtSihfZL._AC_UF1000,1000_QL80_.jpg"},

    { id: 6, titulo: "Jujutsu Kaisen - Volume 18", autor: "Gege Akutami", disponivel: true, capa:"https://m.media-amazon.com/images/I/81InOZKyKSL.jpg"},

    { id: 7, titulo: "One Piece - Volume 104", autor: "Eiichiro Oda", disponivel: true, capa: "https://m.media-amazon.com/images/I/91g0ixjXgXL._UF1000,1000_QL80_.jpg"},

    { id: 8, titulo: "Haikyuu - Volume 1", autor: "Haruichi Farudate", disponivel: true, capa: "https://m.media-amazon.com/images/I/61AU5L7LvRL._AC_UF1000,1000_QL80_.jpg"}
];

// 2. Seleção do container
const container = document.getElementById('resultadosBusca');

// 3. Função para exibir os livros
function exibirLivros(livros) {
    livros.forEach(livro => {
        // Criar elementos
        const card = document.createElement('div');
        card.classList.add('card-livro');

        const imagem = document.createElement('img');
        imagem.setAttribute('src', livro.capa);
        
        const titulo = document.createElement('h3');
        titulo.textContent = livro.titulo;

        const autor = document.createElement('p');
        autor.textContent = livro.autor;

        const status = document.createElement('p');
        const botao = document.createElement('button');
        botao.textContent = "Reservar";
        botao.setAttribute('data-id', livro.id);

        // Lógica de Disponibilidade
        if (livro.disponivel) {
            status.textContent = "Disponível";
            status.classList.add('status-disponivel');
        } else {
            status.textContent = "Indisponível";
            status.classList.add('status-indisponivel');
            botao.disabled = true;
        }

        // Interatividade: Event Listener para o botão
        botao.addEventListener('click', () => {
            botao.textContent = "Reservado!";
            botao.disabled = true;
            status.classList.remove("status-disponivel");
            status.classList.add("status-indisponivel");
            status.textContent = "Indisponível"
            console.log(`Sucesso: O livro "${livro.titulo}" (ID: ${livro.id}) foi reservado.`);
        });

        
        card.appendChild(imagem); // Montagem do Card (AppendChild)
        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(status);
        card.appendChild(botao);

        
        container.appendChild(card);  // Adicionar o card ao container principal
    });
}   

exibirLivros(livrosEncontrados);  // 4. Execução inicial

// --- Nova função para criar a área de pesquisa via DOM ---
function criarAreaPesquisa() {
    const main = document.querySelector('main');

    // 1. Criar o container da pesquisa
    const pesquisaContainer = document.createElement('div');
    pesquisaContainer.classList.add('pesquisa-container');

    // 2. Criar o campo de input
    const inputPesquisa = document.createElement('input');
    inputPesquisa.setAttribute('type', 'text');
    inputPesquisa.setAttribute('placeholder', 'Digite o nome do livro ou autor...');

    // 3. Criar o botão de busca
    const botaoBusca = document.createElement('button');
    botaoBusca.textContent = "Buscar";
    botaoBusca.classList.add('btn-busca'); // Classe extra para o CSS

    // 4. Montar a estrutura
    pesquisaContainer.appendChild(inputPesquisa);
    pesquisaContainer.appendChild(botaoBusca);

    // 5. Inserir no topo do <main> (antes de tudo que já existe lá)
    main.prepend(pesquisaContainer);
};

// Chamar a função para ela construir a barra na tela
criarAreaPesquisa();