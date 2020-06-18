const express = require('express');

const userController = require('./controllers/UserController');

const router = express.Router();



router.get('/', ( req, res ) => res.send("<h1>Tá dando certo. Keep going, Bruh!</h1>"));
router.get('/users', userController.index);
router.post('/users', userController.store);

module.exports = router;
