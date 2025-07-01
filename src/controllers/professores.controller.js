

////////////////////////////////////////

function listar(req, res) {
    res.send('Listar professores');
};

function criar(req, res) {
    res.send('Criar professores');
};

function deletar(req, res) {
    res.send('Deletar professores');
};

function atualizar(req, res) {
    res.send('Atualizar professores');
};

///////////////////////////////////////
module.exports = {
    listar,
    criar,
    deletar,
    atualizar
};

