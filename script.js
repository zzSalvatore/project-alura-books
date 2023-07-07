async function buscaEndereco(cep){
    let menssagemErro = document.getElementById('erro');
    menssagemErro.innerHTML = "";
    try {
        let consultaCep = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
        let consultaCepConvertida = await consultaCep.json();
        if(consultaCepConvertida.erro){
            throw Error("CEP não encontrado!");
        }
        let cidade = document.getElementById("cidade");
        let logradouro = document.getElementById("endereco");
        let bairro = document.getElementById("bairro");
        let uf = document.getElementById("estado");

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        bairro.value = consultaCepConvertida.bairro;
        uf.value = consultaCepConvertida.uf;

        menssagemErro.style="display: none;"

        return consultaCepConvertida;
    } catch (erro) {
        menssagemErro.style="display: flex;"
        menssagemErro.innerHTML = `<p>CEP inválido!</p>`
    }
    
}

let cep = document.getElementById("cep");
cep.addEventListener('focusout', () => buscaEndereco(cep.value));

