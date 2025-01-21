import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from 'axios';
import "./style/AddProjectForm.css"

const AddProjectForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
      try {
        await axios.post('https://test-fe.sidak.co.id/api/projects', { name, description });
        setName('');
        setDescription('');
        toast.success("Project added successfully")
        navigate("/")
      } catch (error) {
        console.error("Error adding project:", error)
        toast.error("Failed to add project")
      }
  }

  return (
    <form onSubmit={handleSubmit} className="add-project-form">
      <div>
        <label htmlFor="projectName">Project Name:</label>
        <input id="projectName" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
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
    </form>
  )
}

export default AddProjectForm

