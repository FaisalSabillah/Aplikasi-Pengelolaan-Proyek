import React from "react"
import "./style/TaskItem.css"

const TaskItem = ({ tasks, onTaskUpdate }) => (
<div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.name}</span>
            <select value={task.status} onChange={(e) => onTaskUpdate(task.id, e.target.value)}>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
)

export default TaskItem

