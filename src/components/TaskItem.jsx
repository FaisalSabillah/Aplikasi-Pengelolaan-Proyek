import React from 'react';
import './style/TaskItem.css';

const TaskItem = ({ task, onStatusUpdate }) => {
  return (
    <li className="task-item">
      <span>{task.name}</span>
      <select
        value={task.status}
        onChange={(e) => onStatusUpdate(task.id, e.target.value)}
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </li>
  );
};

export default TaskItem;

