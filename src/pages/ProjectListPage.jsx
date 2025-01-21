import React from "react"
import { Link } from "react-router-dom"
import ProjectList from "../components/ProjectList"
import "../components/style/ProjectListPage.css"

const ProjectListPage = () => {

  return (
    <div className="project-list-page">
      <div className="header">
        <h1>Aplikasi Pengelolaan Proyek</h1>
        <Link to="/add-project" >
          <button className="add-project-button">Add New Project</button>
        </Link>
      </div>
      <ProjectList />
    </div>
  )
}

export default ProjectListPage

