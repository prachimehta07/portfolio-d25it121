import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import TaskList from "../components/TaskList";
import ConfirmDialog from "../components/ConfirmDialog";
import Toast from "../components/Toast";
import SubtaskSuggestions from "../components/SubtaskSuggestions";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  generateSubtasks,
} from "../services/api";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [toast, setToast] = useState({ message: "", type: "success" });
  const [subtasks, setSubtasks] = useState([]);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiNotice, setAiNotice] = useState("");

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

  const handleGenerateSubtasks = async () => {
    if (!title.trim()) return;

    setAiLoading(true);
    setAiNotice("");

    try {
      const result = await generateSubtasks(title.trim());
      if (result.fallback) {
        setAiNotice(
          "AI suggestions are unavailable right now. You can still add the task as usual."
        );
      } else {
        setSubtasks(result.subtasks);
      }
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      setAiLoading(false);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const description = subtasks
      .map((s) => s.trim())
      .filter(Boolean)
      .join("\n");
    const tempId = `temp-${Date.now()}`;
    const optimisticTask = {
      _id: tempId,
      title,
      completed: false,
      priority,
      description,
    };

    setTasks((prev) => [optimisticTask, ...prev]);
    setTitle("");
    setSubtasks([]);
    setAiNotice("");

    try {
      const saved = await createTask({
        title: optimisticTask.title,
        priority,
        description,
      });
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
          <select
            className="priority-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button
            className="help-toggle"
            type="button"
            onClick={handleGenerateSubtasks}
            disabled={aiLoading || !title.trim()}
          >
            {aiLoading ? "Generating..." : "Generate subtasks"}
          </button>
          <button className="theme-toggle" type="submit">
            Add
          </button>
        </form>

        {aiNotice && <p className="help-text">{aiNotice}</p>}
        {subtasks.length > 0 && (
          <SubtaskSuggestions
            subtasks={subtasks}
            onChange={setSubtasks}
            onClear={() => setSubtasks([])}
          />
        )}

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