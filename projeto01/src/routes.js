const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);
router.post('/carro', CarroController.inserir);
router.put('/carro', CarroController.alterar);
router.delete('/carro', CarroController.excluir);

module.exports = router;