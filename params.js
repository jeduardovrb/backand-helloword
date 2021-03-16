let express = require('express');

let router = express.Router();

router.get('/:p', (req, res) => {
    res.send("Você digito o paramentro: " + req.params.p);
});

router.get('/user/:u/nome/:n', (req, res) => {
    res.send("Você acesso o usuário: " + req.params.u + " de nome: " + req.params.n);
});

module.exports = router;