

////////////////////////////////////////

function listar(req, res) {
    res.send('Listar alunos');
};

function criar(req, res) {
    res.send('Criar alunos');
};

function deletar(req, res) {
    res.send('Deletar alunos');
};

///////////////////////////////////////
module.exports = {
    listar,
    criar,
    deletar
};

