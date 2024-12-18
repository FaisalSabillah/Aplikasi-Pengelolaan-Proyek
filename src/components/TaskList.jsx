import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem.jsx';
import AddTaskForm from './AddTaskForm.jsx';
import './style/TaskList.css';

const TaskList = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`https://test-fe.sidak.co.id/api/projects/${projectId}/tasks`); 
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, [projectId]);

  const handleTaskUpdate = async (taskId, newStatus) => {
    try {
      await axios.put(`https://test-fe.sidak.co.id/api/tasks/${taskId}`, { status: newStatus });
      setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, status: newStatus } : task
      ));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="task-list">
      <h2>Tasks for Project {projectId}</h2>
      <AddTaskForm projectId={projectId} onTaskAdded={(newTask) => setTasks([...tasks, newTask])} />
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onStatusUpdate={handleTaskUpdate} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

