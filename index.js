import express from 'express';

const porta = 3000;
const host = '0.0.0.0';

const app = express();

app.listen(porta, host, () => {
    console.log(`Servidor rodando na porta htttp://${localhost}:${porta}`);
});


