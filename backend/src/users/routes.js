const { Router } = require('express');
const controller = require('./controller');
const  crypto  = require('./crypto');
const router = Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUsersById); //qualquer valor que eu colocar depois da barra do meu users vai ser o id (sem os dois pontinhos)

router.post('/', controller.addUser);
router.delete("/:id", controller.deleteUser);

router.put("/:id", controller.updateUser);

router.post("/signup", crypto.encryptPassword);
router.post("/login", crypto.decryptPassword);

module.exports = router;