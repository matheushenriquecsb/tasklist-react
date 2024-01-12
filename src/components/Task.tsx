import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import "./task.css";
import { TaskInterfaceProps } from "../interfaces/task.interface";

const Todos = ({
  tasks,
  modifyStatusTask,
  handleWithEditButtonClick,
  deleteTodo,
}) => {
  return (
    <div className="todos">
      {tasks.map((task) => {
        return (
          <div className="todo">
            <button
              onClick={() => modifyStatusTask(task)}
              className="checkbox"
              style={{ backgroundColor: task.status ? "#A879E6" : "white" }}
            ></button>
            <p>{task.name}</p>
            <button onClick={() => handleWithEditButtonClick(task)}>
              <AiOutlineEdit size={23} color={"#64697b"}></AiOutlineEdit>
            </button>
            <button onClick={() => deleteTodo(task)}>
              <AiOutlineDelete size={23} color={"#64697b"}></AiOutlineDelete>
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Todos;
