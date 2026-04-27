// 1. Simulação de dados (Array de Objetos)
const livrosEncontrados = [
    { id: 1, titulo: "JoJo's Bizzare Adventure Stell Ball Run - Volume 1", autor: "Hirohiko Araki", disponivel: true, capa: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_jdblsn20cd1vt929ifqeksua5m/-S897-f.webp" },

    { id: 2, titulo: "Kimetsu no Yaiba Demon Slayer - Volume 12", autor: "Koyoharu Gotouge", disponivel: true, capa: "https://d14d9vp3wdof84.cloudfront.net/image/589816272436/image_82db58063l7kf8j47r9i0k8r6v/-S897-FWEBP" },

    { id: 3, titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true, capa: "https://www.livrariapolobooks.com.br/image/cache/catalog/Dom-Casmurro-600x800.jpg" },

    { id: 4, titulo: "Duna", autor: "Frank Herbert", disponivel: true, capa: "https://m.media-amazon.com/images/I/81zN7udGRUL.jpg" },

    { id: 5, titulo: "Sense Life - Volume 1", autor: "Caio Ulisses", disponivel: false, capa:"https://m.media-amazon.com/images/I/61gMtSihfZL._AC_UF1000,1000_QL80_.jpg"}
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
            console.log(`Sucesso: O livro "${livro.titulo}" (ID: ${livro.id}) foi reservado.`);
        });

        // Montagem do Card (AppendChild)
        card.appendChild(imagem);
        card.appendChild(titulo);
        card.appendChild(autor);
        card.appendChild(status);
        card.appendChild(botao);

        // Adicionar o card ao container principal
        container.appendChild(card);
    });
}

// 4. Execução inicial
exibirLivros(livrosEncontrados);