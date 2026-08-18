function Toast({ message, type }) {
  if (!message) return null;

  return (
    <div className={type === "error" ? "toast toast-error" : "toast toast-success"}>
      {message}
    </div>
  );
}

export default Toast;