function SubtaskSuggestions({ subtasks, onChange, onClear }) {
  const updateStep = (index, value) => {
    onChange(subtasks.map((step, i) => (i === index ? value : step)));
  };

  const removeStep = (index) => {
    onChange(subtasks.filter((_, i) => i !== index));
  };

  return (
    <div className="subtask-panel">
      <p className="section-label">AI SUGGESTED SUBTASKS</p>

      {subtasks.map((step, index) => (
        <div className="subtask-row" key={index}>
          <input
            className="contact-input"
            type="text"
            value={step}
            onChange={(e) => updateStep(index, e.target.value)}
          />
          <button type="button" className="task-delete" onClick={() => removeStep(index)}>
            Remove
          </button>
        </div>
      ))}

      <p className="help-text">
        AI-generated suggestion. Review and edit before adding; these steps are saved with the task.
      </p>
      <button type="button" className="help-toggle" onClick={onClear}>
        Discard
      </button>
    </div>
  );
}

export default SubtaskSuggestions;