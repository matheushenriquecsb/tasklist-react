import { useEffect, useState } from "react";
import "./index.css";
import * as api from "../hooks/fetch-api";
import Todos from "../components/Task";
import { TaskInterfaceProps } from "../interfaces/task.interface";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputVisibility, setInputVisibility] = useState(false);
  const [selectedTask, setSelectedTodo] = useState();

  async function handleWithNewButton() {
    setInputVisibility(!inputVisibility);
  }

  async function handleWithEditButtonClick(todo: TaskInterfaceProps) {
    setSelectedTodo(todo);
    setInputVisibility(true);
  }

  async function getTasks() {
    const response = await api.getData();
    setTasks(response);
  }

  async function editTask() {
    console.log(inputValue);
    await api.editData(selectedTask.id, inputValue);
    setInputVisibility(false);
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
    setInputVisibility(!inputVisibility);
    setInputValue("");
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="App">
      <header className="container">
        <div className="headerTitle">
          <h1>Tasks List</h1>
        </div>
        <Todos
          tasks={tasks}
          modifyStatusTask={modifyStatusTask}
          handleWithEditButtonClick={handleWithEditButtonClick}
          deleteTask={deleteTask}
        ></Todos>
        <input
          value={inputValue}
          style={{ display: inputVisibility ? "block" : "none" }}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          className="inputName"
        ></input>
        <button
          onClick={
            inputVisibility
              ? selectedTask
                ? editTask
                : createTask
              : handleWithNewButton
          }
          className="newTaskButton"
        >
          {inputVisibility ? "Confirm" : "+ New task"}
        </button>
      </header>
    </div>
  );
};

export default Index;
