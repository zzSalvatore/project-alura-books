const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtraLivro))

function filtraLivro(){
    const elementoBtn = document.getElementById(this.id);
    let categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibeLivros(livrosFiltrados);  
    if( categoria == 'disponivel'){
        const valorTotal = calculaValorLivrosDisponiveis(livrosFiltrados);
        exibeTotalDeLivrosDisponiveis(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibeTotalDeLivrosDisponiveis(valorTotal){
    elementoComValorTotal.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `
}



    
