let livros = [];
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi(){
    const res = await fetch(endPointDaApi);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibeLivros(livrosComDesconto);
}

//Adicionando redirecionamento para Home
let redirectHomeByImg = document.getElementById('img__alura');
let redirectHomeByTitle = document.getElementById('title__alura');

redirectHomeByImg.addEventListener('click', (e) => {
    window.location.href = 'https://zzsalvatore.github.io/project-alura-books/';
})

redirectHomeByTitle.addEventListener('click', (e) => {
    window.location.href = 'https://zzsalvatore.github.io/project-alura-books/';
})