const btnFiltrarPorPreco = document.getElementById('btnOrdenarPorPreco');

btnFiltrarPorPreco.addEventListener('click', filtraPorPreco);

function filtraPorPreco(){
    livrosOrdenados = livros.sort((a,b) => a.preco - b.preco )
    exibeLivros(livrosOrdenados); 
}