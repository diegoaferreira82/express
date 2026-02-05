//criada pasta serviços que ficará responsável só por ler e retorar conteudo dos
//arquivos. Comunica direto com Banco de Dados.

const fs = require("fs");
//const { patchLivro } = require("../controladores/livro");  --> ver se essa linha foi apagada no projeto final na ALURA

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));

    const livroFiltrado = livros.filter(livro => livro.id === id);

    return (livroFiltrado);
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));

    const novaListaDeLivros = [...livros, livroNovo] //tudo que tem autalmente + novo livro ... é tecnico chamada spread

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

function modificaLivro(modificacoes, id) {
    //não vai ser const e sim let, pois vai modificar o registro.
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json")); //pega todos os livros atuais
    //o ID não é ligado ao índice, pois um registro pode ser apagado e ficar com ID 1,3,4,6
    //então para achar o index deve filtrar pelo id enviado como parametro da url.
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id);
    //Abaixo ele vai pegar todos os dados do objeto refrente ao indice a ser modificado
    //no 2ºspread vai comparar se o campo enviado para modificar existe. Se não existir, vai criar
    //se existir vai modificar.
    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };

    livrosAtuais[indiceModificado] = conteudoMudado;

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json")) // pega todos os livros

    const livrosFiltrados = livros.filter(livro => livro.id !== id) // filtra todos os diferentes do ID
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados)) //reescreve arquivo com os livros filtrados.
}


module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivroPorId
}