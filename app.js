// a ordem de execução é ROTA -> Controlador -> Serviços
// para implementar usa o caminho inverso, implementa primeiro o serviço depois controlador e depois rota
const express = require("express")
const rotaLivro = require("./rotas/livro")

const app = express()
app.use(express.json()); //agora o app consegue receber requisições body no formato JSON

app.use('/livros', rotaLivro)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})