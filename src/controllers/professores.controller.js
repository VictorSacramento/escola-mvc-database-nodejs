

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

///////////////////////////////////////
module.exports = {
    listar,
    criar,
    deletar
};

