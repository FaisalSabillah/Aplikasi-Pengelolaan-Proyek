import React, { useState } from "react"
import axios from 'axios';
import { toast } from "react-toastify"
import "./style/AddTaskForm.css"

const AddTaskForm = ({ projectId, onTaskAdded }) => {
  const [name, setName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`https://test-fe.sidak.co.id/api/projects/${projectId}/tasks`, { name, status: 'To Do' });
      onTaskAdded(response.data);
      toast.success("Task added successfully")
    } catch (error) {
      console.error("Error adding task:", error)
      toast.error("Failed to add task")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <div>
        <label htmlFor="taskName">Task Name:</label>
        <input id="taskName" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default AddTaskForm

