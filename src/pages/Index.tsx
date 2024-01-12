import { useEffect, useState } from "react";
import "./index.css";
import * as api from "../hooks/fetch-api";
import Todos from "../components/Task";
import { TaskInterfaceProps } from "../interfaces/task.interface";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputVisbility, setInputVisility] = useState(false);
  const [selectedTask, setSelectedTodo] = useState();

  async function handleWithNewButton() {
    setInputVisility(!inputVisbility);
  }

  async function handleWithEditButtonClick(todo) {
    setSelectedTodo(todo);
    setInputVisility(true);
  }

  async function getTasks() {
    const response = await api.getData();
    setTasks(response);
  }

  async function editTodo() {
    console.log(inputValue);
    await api.editData(selectedTask.id, inputValue);
    setInputVisility(false);
    setSelectedTodo();
    getTasks();
    setInputValue("");
  }

  async function deleteTask(todo: TaskInterfaceProps) {
    await api.deleteData(todo.id);
    getTasks();
  }

  async function modifyStatusTask(todo: TaskInterfaceProps) {
    await api.modifyStatus(todo.id, !todo.status);
    getTasks();
  }

  async function createTask() {
    await api.createData(inputValue);
    getTasks();
    setInputVisility(!inputVisbility);
    setInputValue("");
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="App">
      <header className="container">
        <div className="headerTitle">
          <h1>Task List</h1>
        </div>
        <Todos
          tasks={tasks}
          modifyStatusTask={modifyStatusTask}
          handleWithEditButtonClick={handleWithEditButtonClick}
          deleteTodo={deleteTask}
        ></Todos>
        <input
          value={inputValue}
          style={{ display: inputVisbility ? "block" : "none" }}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          className="inputName"
        ></input>
        <button
          onClick={
            inputVisbility
              ? selectedTask
                ? editTodo
                : createTask
              : handleWithNewButton
          }
          className="newTaskButton"
        >
          {inputVisbility ? "Confirm" : "+ New task"}
        </button>
      </header>
    </div>
  );
};

export default Index;
