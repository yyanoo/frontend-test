import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Task } from "../types/task";

// TODO: create a form to add new task
export const TaskForm: React.FC = () => {
  const { addTask } = useTasks();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium" as Task["priority"],
    status: "todo" as Task["status"],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title.trim() === "") {
      alert("Title is required!");
      return;
    }
    addTask(formData);
    setFormData({
      title: "",
      description: "",
      priority: "medium",
      status: "todo",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2 className="text-lg font-bold mb-2">Add New Task</h2>
      <div className="mb-2">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <textarea
          name="description"
          placeholder="Task Description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
      <div className="mb-2">
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button type="submit">Add Task </button>
    </form>
  );
};
