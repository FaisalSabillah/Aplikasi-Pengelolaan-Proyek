import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TaskItem from "./TaskItem"
import AddTaskForm from "./AddTaskForm"
import { toast } from "react-toastify"
import axios from 'axios';
import "./style/TaskList.css"

const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const { projectId } = useParams()

  const handleTaskUpdate = async (taskId, newStatus) => {
    try {
      await axios.put(`https://test-fe.sidak.co.id/api/tasks/${taskId}`, { status: newStatus });
      setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)))
      toast.success("Task updated successfully")
    } catch (error) {
      console.error("Error updating task:", error)
      toast.error("Failed to update task")
    }
  }

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const response = await axios.get(`https://test-fe.sidak.co.id/api/projects/${projectId}/tasks`);
        setTasks(response.data)
      } catch (error) {
        console.error("Error fetching tasks:", error)
        toast.error("Failed to load tasks")
      }
    }

    loadTasks()
  }, [projectId])

  return (
    <div className="list-container">
      <div className="task-list">
        <h1>Tasks for Project {projectId}</h1>
          <AddTaskForm projectId={projectId} onTaskAdded={(newTask) => setTasks([...tasks, newTask])} />
      </div>
      <div className="list-item">
        <h3>Task List:</h3>
          <TaskItem tasks={tasks} onTaskUpdate={handleTaskUpdate} />
        </div>
    </div>
  )
}

export default TaskList

