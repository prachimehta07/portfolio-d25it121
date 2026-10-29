function TaskItem({ task, onToggleComplete, onDelete }) {
  const steps = task.description
    ? task.description.split("\n").filter(Boolean)
    : [];

  return (
    <div className="task-item">
      <div className="task-main">
        <label className="task-checkbox">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task)}
          />
          <span className={task.completed ? "task-title done" : "task-title"}>
            {task.title}
          </span>
        </label>

        {steps.length > 0 && (
          <ul className="subtask-list">
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        )}
      </div>

      {task.priority && (
        <span className={`task-priority priority-${task.priority}`}>
          {task.priority}
        </span>
      )}

      <button className="task-delete" onClick={() => onDelete(task)}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;