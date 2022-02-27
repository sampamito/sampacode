import './App.css';
import { useState, useEffect } from 'react';
import { FirebaseApp } from 'firebase/app';

function App() {

  const [tasks, setTask] = useState([
    /*
    {
      id: 0,
      task: 'Minha tarefa do dia',
      finished: false
    },
    {
      id: 1,
      task: 'Minha tarefa do dia 2',
      finished: true
    }
    */
  ]);
  const [modal, setModal] = useState(false);

  const saveTask = () => {
    //to-Do: Salvear a tarefa
    var taskContent = document.getElementById('content-task');
    var addTask = [
      ...tasks,
      {
        id: new Date().getTime(),
        task: taskContent.value,
        finished: false
      }
    ]

    setTask(addTask);

    window.localStorage.setItem('tasks',JSON.stringify(addTask));

    setModal(false);

  }

  const markDone = (idTask, opt) => {
    
    let newTask = tasks.filter((val)=>{
      if(val.id == idTask){
        val.finished = opt;
      }

      return val;

    })

    setTask(newTask);
    window.localStorage.setItem('tasks',JSON.stringify(newTask));

  }

  const openModal = () => {
    setModal(!modal);
  }

  const deleteTask = (idTask)=>{
    let delTask = tasks.filter((val)=>{
      if(val.id != idTask){
        return val;
      }

    })

    setTask(delTask);
    window.localStorage.setItem('tasks',JSON.stringify(delTask));
  }

  useEffect(() => {
    // fazer uma chamada para API e preencher o estado das tarefas
    if (window.localStorage.getItem('tasks') != undefined){
      var jsonAux = JSON.parse(window.localStorage.getItem('tasks'));      
      setTask(jsonAux);
      
      //console.log(jsonAux.id);
    }
  }, [])

  return (
    <div className="App">
      {
        modal ?
          <div className="modal">
            <div className="modalContent">
              <h3>Adicionar sua tarefa</h3>
              <input id="content-task" type="text" />
              <button onClick={() => saveTask()}>Salvar!</button>
            </div>
          </div>
          :
          <div></div>
      }
      <div onClick={() => openModal()} className="addTask">+</div>
      <div className="boxTasks">
        <h2>Minhas tarefas do dia!</h2>
        {
          tasks.map((val) => {
            if (!val.finished) {
              return (
                <p> <span className="task" onClick={() => markDone(val.id, true)} > {val.task} </span> <a onClick={()=>deleteTask(val.id)}>(X)</a></p>
              );
            } else {
              return (
                <p style={{ textDecoration: 'line-through' }}> <span onClick={() => markDone(val.id, false)} > {val.task} </span> <a onClick={()=>deleteTask(val.id)} >(X)</a> </p>
              );
            }
          })
        }
      </div>
    </div>
  );
}

export default App;
