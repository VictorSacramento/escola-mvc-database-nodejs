const express = require('express'); 

// Controllers
const cursoController = require('./controllers/cursos.controller');
const alunoController = require('./controllers/alunos.controller');
const professorController = require('./controllers/professores.controller');
//////////////

const app = express();

// Criar uma rota para a raiz do servidor
app.get('/cursos', cursoController.listar);
app.post('/cursos', cursoController.criar);
app.delete('/cursos/:id', cursoController.deletar);

app.get('/alunos', alunoController.listar);
app.post('/alunos', alunoController.criar);
app.delete('/alunos/:id', alunoController.deletar);

app.get('/professores', professorController.listar);
app.post('/professores', professorController.criar);
app.delete('/professores/:id', professorController.deletar);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

