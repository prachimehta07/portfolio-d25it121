import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import TaskList from "../components/TaskList";
import ConfirmDialog from "../components/ConfirmDialog";
import Toast from "../components/Toast";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [toast, setToast] = useState({ message: "", type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "success" }), 2500);
  };

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const tempId = `temp-${Date.now()}`;
    const optimisticTask = { _id: tempId, title, completed: false, priority: "low" };

    // Optimistic UI update: show immediately, reconcile with server after
    setTasks((prev) => [optimisticTask, ...prev]);
    setTitle("");

    try {
      const saved = await createTask({ title: optimisticTask.title });
      setTasks((prev) => prev.map((t) => (t._id === tempId ? saved : t)));
      showToast("Task created");
    } catch (err) {
      setTasks((prev) => prev.filter((t) => t._id !== tempId));
      showToast(err.message, "error");
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      const updated = await updateTask(task._id, { completed: !task.completed });
      setTasks((prev) => prev.map((t) => (t._id === task._id ? updated : t)));
      showToast("Task updated");
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  const confirmDelete = async () => {
    const task = taskToDelete;
    setTaskToDelete(null);

    try {
      await deleteTask(task._id);
      setTasks((prev) => prev.filter((t) => t._id !== task._id));
      showToast("Task deleted");
    } catch (err) {
      showToast(err.message, "error");
    }
  };

  return (
    <main>
      <section className="section">
        <p className="section-label">05 / TASKS</p>
        <h2>Task Manager</h2>

        <form className="task-form" onSubmit={handleCreate}>
          <input
            className="contact-input"
            type="text"
            placeholder="Add a new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="theme-toggle" type="submit">Add</button>
        </form>

        {loading && <Spinner />}
        {error && <ErrorMessage message={error} onRetry={loadTasks} />}

        {!loading && !error && (
          <TaskList
            tasks={tasks}
            onToggleComplete={handleToggleComplete}
            onDelete={(task) => setTaskToDelete(task)}
          />
        )}
      </section>

      {taskToDelete && (
        <ConfirmDialog
          message={`Delete "${taskToDelete.title}"?`}
          onConfirm={confirmDelete}
          onCancel={() => setTaskToDelete(null)}
        />
      )}

      <Toast message={toast.message} type={toast.type} />
    </main>
  );
}

export default Tasks;