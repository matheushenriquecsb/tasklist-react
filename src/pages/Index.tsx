import Task from "../components/Task";
import "./index.css";

const Index = () => {
  return (
    <div className="App">
      <div>
        <header className="container">
          <div className="headerTitle">
            <h1>Task List</h1>
          </div>
          <Task />
        </header>
      </div>
    </div>
  );
};

export default Index;
