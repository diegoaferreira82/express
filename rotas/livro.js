const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controladores/livro")

const router = Router()

// essa função getLivros ficou isolada em outro arquivo.
//lá no arquivo faz o module.exportes e aqui faz o require.
router.get('/', getLivros);

router.get('/:id', getLivro);

//passa todas as informações a serem incluidas
router.post('/', postLivro);

//passa somente as informações a serem alteradas no body e o parametro(id) na url
router.patch('/:id', patchLivro);

router.delete('/:id', deleteLivro)

module.exports = router