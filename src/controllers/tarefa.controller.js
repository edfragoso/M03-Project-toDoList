const tarefasService = require('../services/tarefa.service');

const findAllTarefasController = (req, res) => {
  const tarefas = tarefasService.findAllTarefaService();
  res.send(tarefas);
};

const findByIdTarefaController = (req, res) => {
  const parametroId = req.params.id;
    const escolhaTarefa = tarefasService.findByIdTarefaService(parametroId);
    if (escolhaTarefa !== undefined) {
        res.send(escolhaTarefa);
  } else {
        res.send({ message: 'Tarefa não encontrada' });
  }
};

const createTarefaController = (req, res) => {
    const tarefa = req.body;
    if (tarefa.tarefa === undefined || tarefa.descricao === undefined || tarefa.situacao === undefined) {
    res.status(400).send({ message: 'Dados incompletos, por favor preencha todos os campos' });
    }
    if (typeof (tarefa.situacao) !== "boolean") {
        res.status(400).send({ message: 'Campo situação dever ser do tipo boolean' });
    } else {
        const novaTarefa = tarefasService.createTarefaService(tarefa);
        res.status(201).send({ message: 'Tarefa criada com sucesso', data: novaTarefa });
    }
};

const updateTarefaController = (req, res) => {
  const idParam = req.params.id;
  const tarefaEditada = req.body;
  const updateTarefa = tarefasService.updateTarefaService(idParam, tarefaEditada);
     if (updateTarefa.tarefa === undefined || updateTarefa.descricao === undefined || updateTarefa.situacao === undefined) {
    res.status(400).send({ message: 'Dados incompletos, por favor preencha todos os campos' });
    }
   if (typeof(updateTarefa.situacao) !== "boolean") {
    res.status(400).send({ message: 'Campo situação dever ser do tipo boolean' });
   }
   if (updateTarefa.id !== undefined) {
    res.send({ message: 'Tarefa Atualizada com sucesso!', data: updateTarefa });
  } else {
    res.send({ message: 'Tarefa não encontrada' });
  }
};

const deleteTarefaController = (req, res) => {
    const idParam = req.params.id;
    const deleteTarefas = tarefasService.deleteTarefaService(idParam);
    if (deleteTarefas) {
        res.send({ message: "Tarefa excluida com sucesso!" });
    } else {
        res.send({ message: 'Tarefa não encontrada' });
    }
};

module.exports = {
  findAllTarefasController,
  findByIdTarefaController,
  createTarefaController,
  updateTarefaController,
  deleteTarefaController,
};
