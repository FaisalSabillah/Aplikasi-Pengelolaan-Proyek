import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style/ProjectList.css';

const ProjectList = ({ onProjectSelect }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://test-fe.sidak.co.id/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="project-list">
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="project-item">
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <button onClick={() => onProjectSelect(project.id)}>View Tasks</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

