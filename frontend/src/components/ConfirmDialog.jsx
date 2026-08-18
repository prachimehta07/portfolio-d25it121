function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="confirm-overlay">
      <div className="confirm-box">
        <p className="section-text">{message}</p>
        <div className="confirm-actions">
          <button className="help-toggle" onClick={onCancel}>Cancel</button>
          <button className="help-toggle confirm-danger" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;