const { Router } = require("express")
const { getLivros } = require("../controladores/livro")

const router = Router()

// essa função getLivros ficou isolada em outro arquivo.
//lá no arquivo faz o module.exportes e aqui faz o require.
router.get('/', getLivros)

router.post('/', (req, res) => {
    res.send('Requisição POST')
})

router.patch('/', (req, res) => {
    res.send('Requisição PATCH')
})

router.delete('/', (req, res) => {
    res.send('Requisição DELETE')
})

module.exports = router