

////////////////////////////////////////

function listar(req, res) {
    res.send('Listar cursos');
};

function criar(req, res) {
    res.send('Criar curso');
};

function deletar(req, res) {
    res.send('Deletar curso');
};

///////////////////////////////////////
module.exports = {
    listar,
    criar,
    deletar
};

