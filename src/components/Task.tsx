import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import "./task.css";

const Task = () => {
  return (
    <div className="todos">
      <div className="todo">
        <button className="checkbox"></button>
        <p>Task</p>
        <button>
          <AiOutlineEdit size={22} color={"#64697b"}></AiOutlineEdit>
        </button>
        <button>
          <AiOutlineDelete size={24} color={"#64697b"}></AiOutlineDelete>
        </button>
      </div>
    </div>
  );
};

export default Task;
