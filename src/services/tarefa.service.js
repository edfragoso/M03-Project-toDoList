const { v4: uuidv4 } = require('uuid'); // Gerador de ID exclusivo

const tarefas = [
  {
    id: '1',
    tarefa: 'Estruturar código para o primeiro projeto, toDoList.',
    descricao: 'AULA01 - Node.js Express',
    situacao: true,
  },
  {
    id: '2',
    tarefa: 'Assistir aulas do gitBook',
    descricao: 'AULA02 - Introdução parte1 Node.js Express.',
    situacao: true,
  },
  {
    id: '3',
    tarefa: 'Construir o padrão MVC para o projeto',
    descricao: 'AULA03 - Introdução parte2 Node.js Express.',
    situacao: true,
  },
  {
    id: '4',
    tarefa: 'Construir as Rotas',
    descricao: 'AULA03 - Introdução parte2 Node.js Express.',
    situacao: true,
  },
  {
    id: '5',
    tarefa: 'Construir o CONTROLER',
    descricao: 'AULA03 - Introdução parte2 Node.js Express.',
    situacao: true,
  },
  {
    id: '6',
    tarefa: 'Construir a camada SERVICE',
    descricao: 'AULA03 - Introdução parte2 Node.js Express.',
    situacao: true,
  },
];

// Buscando todas tarefas da lista
const findAllTarefaService = () => tarefas;

// Buscando por ID
const findByIdTarefaService = (id) => {
  let indice = 0;
  const tarefa = tarefas.map((tarefa, index) => {
    if (tarefa.id === id) {
      indice = index;
      return tarefa;
    }
  });
  return tarefa[indice];
};

// Criando nova tarefa
const createTarefaService = (novaTarefa) => {
  novaTarefa.id = uuidv4();
  tarefas.push(novaTarefa);
  return novaTarefa;
};

// Atualizando tarefa
const updateTarefaService = (id, tarefaEditada) => {
  
  tarefas.forEach((tarefa, index) => {
    if (tarefa.id === id) {
      tarefaEditada.id = id;
      tarefas[index] = tarefaEditada;
    }
  });
  return tarefaEditada;
};

// Deletar tarefa
const deleteTarefaService = (id) => {
  let tarefaDeletada = false;
  tarefas.forEach((tarefa, index) => {
    if (tarefa.id === id) {
      tarefaDeletada = true;
      tarefas.splice(index, 1);
    }
  })
  return tarefaDeletada;
};

module.exports = {
  findAllTarefaService,
  findByIdTarefaService,
  createTarefaService,
  updateTarefaService,
  deleteTarefaService,
};
