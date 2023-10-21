const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUsersById); //qualquer valor que eu colocar depois da barra do meu users vai ser o id (sem os dois pontinhos)

router.post('/', controller.createUser);

module.exports = router;