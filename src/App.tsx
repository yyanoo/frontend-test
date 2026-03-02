import React from "react";
import { TaskProvider } from "./context/TaskContext";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
// import { TaskForm } from "./components/TaskForm";

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div>
        <h1>Task Management App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
