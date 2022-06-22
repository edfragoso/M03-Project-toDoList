const tarefas = [
  {
    id: 1,
    tarefa: 'Estruturar código para o primeiro projeto, toDoList.',
    descricao: 'AULA01 - Node.js Express',
    situacao: true,
  },
  {
    id: 2,
    tarefa: 'Assistir aulas do gitBook',
    descricao: 'AULA02 - Introdução parte1 Node.js Express.',
    situacao: true,
  },
  {
    id: 3,
    tarefa: 'Construir o padrão MVC para o projeto',
    descricao: 'AULA03 - Introdução parte2 Node.js Express.',
    situacao: true,
  },
  {
    id: 4,
    tarefa: 'Construir as Rotas',
    descricao: 'AULA03 - Introdução parte2 Node.js Express.',
    situacao: true,
  },
  {
    id: 5,
    tarefa: 'Construir o CONTROLER',
    descricao: 'AULA03 - Introdução parte2 Node.js Express.',
    situacao: true,
  },
  {
    id: 6,
    tarefa: 'Construir a camada SERICE',
    descricao: 'AULA03 - Introdução parte2 Node.js Express.',
    situacao: true,
  },
];

const findAllTarefaService = () => {
  return tarefas;
};

const findByIdTarefaService = (parametroId) => {
  const tarefa = tarefas.find((tarefa) => tarefa.id == parametroId);
  return tarefa;
};

const createTarefaService = (novaTarefa) => {
  const novoId = tarefas.length + 1;
  novaTarefa.id = novoId;
  tarefas.push(novaTarefa);
  return novaTarefa;
};

const updateTarefaService = (id, tarefaEditada) => {
  tarefaEditada['id'] = id;
  const tarefaIndex = tarefas.findIndex((tarefa) => tarefa.id == id);
  tarefas[tarefaIndex] = tarefaEditada;
  return tarefaEditada;
};

const deleteTarefaService = (id) => {
  const tarefaEditada = tarefas.findIndex((tarefa) => tarefa.id == id);
  return tarefas.splice(tarefaEditada, 1);
};

module.exports = {
  findAllTarefaService,
  findByIdTarefaService,
  createTarefaService,
  updateTarefaService,
  deleteTarefaService,
};
