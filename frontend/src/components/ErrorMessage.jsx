function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-box">
      <p className="section-text">Something went wrong: {message}</p>
      {onRetry && (
        <button className="help-toggle" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;