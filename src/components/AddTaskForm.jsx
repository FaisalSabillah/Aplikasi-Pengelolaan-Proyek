import React, { useState } from 'react';
import axios from 'axios';
import './style/AddTaskForm.css';

const AddTaskForm = ({ projectId, onTaskAdded }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://test-fe.sidak.co.id/api/projects/${projectId}/tasks`, { name, status: 'To Do' });
      onTaskAdded(response.data);
      setName('');
      setMessage('Task added successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error adding task:', error);
      setMessage('Error adding task. Please try again.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <h3>Add New Task</h3>
      <div>
        <label htmlFor="taskName">Task Name:</label>
        <input
          id="taskName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Task</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default AddTaskForm;

