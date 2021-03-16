const express = require('express');

const app = express();

const port = 3000;

app.get('/ab[0-9]cd', (req, res) => {
    res.send("Essa é uma expressão regular. ");
});

let params_module = require('./params.js');

app.use('/', params_module);

app.get('/sobre', (req, res) => {
    res.send("<h1>Você está em uma página sobre.</h1><br>aqui é paragrafo.</br>");
});

app.post('/json', (req, res) => {
    res.status(200).json({usuario: "Jorge", id: 1});
});

app.get('/', (req, res) => {
    res.send("Olá! Seja bem-vindo! ");
});

app.post('/post/teste_post', (req, res) => {
    res.send("Você acessou  o método post.");
});

app.get('*', (req, res) => {
    res.send("Link Inválido: 404");
});

app.listen(port, () => console.log(`Escutando na porta ${port}`));