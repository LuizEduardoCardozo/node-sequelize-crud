const express = require('express');

const router = express.Router();

router.get('/', ( req, res ) => res.send("<h1>Tá dando certo. Keep going, Bruh!</h1>"));

module.exports = router;
