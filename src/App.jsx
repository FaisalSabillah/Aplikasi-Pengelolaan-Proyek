import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import ProjectListPage from "./pages/ProjectListPage"
import AddProjectPage from "./pages/AddProjectPage"
import TaskListPage from "./pages/TaskListPage"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<ProjectListPage />} />
            <Route path="/add-project" element={<AddProjectPage />} />
            <Route path="/project/:projectId" element={<TaskListPage />} />
          </Routes>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </Router>
  )
}

export default App

