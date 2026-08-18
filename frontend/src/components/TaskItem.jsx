function TaskItem({ task, onToggleComplete, onDelete }) {
  return (
    <div className="task-item">
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