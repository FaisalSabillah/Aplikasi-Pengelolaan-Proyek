import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';
import "./style/ProjectList.css";

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    const loadProjects = useCallback(async () => {
        try {
            const response = await axios.get('https://test-fe.sidak.co.id/api/projects');
            setProjects(response.data);
        } catch (error) {
            console.error("Error fetching projects:", error);
            toast.error("Failed to load projects");
        }
    }, []); // Tambahkan dependensi yang diperlukan di sini

    useEffect(() => {
        loadProjects();
    }, [loadProjects]); // Sekarang loadProjects ada di sini

    return (
        <div className="project-list">
            <ul>
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <li key={project.id} className="project-item">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <Link to={`/project/${project.id}`}><button>View Tasks</button></Link>
                        </li>
                    ))
                ) : (
                    <li>No projects available</li>
                )}
            </ul>
        </div>
    );
};

export default ProjectList;