const { Router } = require('express');
const router = Router();
const controller = require('./users/controller');

router.get('/', controller.getUsers)

module.exports = router;