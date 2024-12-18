import React, { useState } from 'react';
import axios from 'axios';
import './style/AddProjectForm.css';

const AddProjectForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://test-fe.sidak.co.id/api/projects', { name, description });
      setName('');
      setDescription('');
      setMessage('Project added successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error adding project:', error);
      setMessage('Error adding project. Please try again.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-project-form">
      <h2>Add New Project</h2>
      <div>
        <label htmlFor="projectName">Project Name:</label>
        <input
          id="projectName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="projectDescription">Project Description:</label>
        <textarea
          id="projectDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Project</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default AddProjectForm;

