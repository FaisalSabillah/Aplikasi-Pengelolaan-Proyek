import React, { useState } from 'react';
import ProjectList from './components/ProjectList.jsx';
import AddProjectForm from './components/AddProjectForm.jsx';
import TaskList from './components/TaskList.jsx';
import './App.css';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app">
      <div className="container">
        <h1>Project Management App</h1>
        <AddProjectForm />
        <ProjectList onProjectSelect={setSelectedProject} />
        {selectedProject && <TaskList projectId={selectedProject} />}
      </div>
    </div>
  );
};

export default App;

