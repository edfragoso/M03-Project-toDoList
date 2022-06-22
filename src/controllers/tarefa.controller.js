const tarefasService = require('../services/tarefa.service');


const findAllTarefasController = (req, res) => {
    const tarefas = tarefasService.findAllTarefaService();
    res.send(tarefas);
};

const findByIdTarefaController = (req, res) => {
    const parametroId = Number(req.params.id);
    const escolhaTarefa = tarefasService.findByIdTarefaService(parametroId);
    res.send(escolhaTarefa);
};

const createTarefaController = (req, res) => {
    const tarefa = req.body;
    const novaTarefa = tarefasService.createTarefaService(tarefa);
    res.send(novaTarefa);
};

const updateTarefaController = (req, res) => {
    const idParam = Number(req.params.id);
    const tarefaEditada = req.body;
    const updateTarefa = tarefasService.updateTarefaService(idParam, tarefaEditada);
    res.send(updateTarefa);
};

const deleteTarefaController = (req, res) => {
    const idParam = req.params.id;
    tarefasService.deleteTarefaService(idParam);
    res.send({messagem: 'Tarefa excluida com sucesso!'})
}


module.exports = {
    findAllTarefasController,
    findByIdTarefaController,
    createTarefaController,
    updateTarefaController,
    deleteTarefaController,
};
