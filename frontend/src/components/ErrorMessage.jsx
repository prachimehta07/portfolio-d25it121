function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-box">
      <p className="section-text">Couldn't load repositories: {message}</p>
      {onRetry && (
        <button className="help-toggle" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;