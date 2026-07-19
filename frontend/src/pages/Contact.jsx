import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  return (
    <main>
      <section className="section">
        <p className="section-label">04 / CONTACT</p>
        <h2>Get in Touch</h2>

        <button className="help-toggle" onClick={() => setShowHelp((prev) => !prev)}>
         {showHelp ? "Hide tip" : "Need a tip?"}
        </button>

        {showHelp && (
          <p className="help-text">
            Write a short note about what you'd like to build together.
            I read every message.
          </p>
        )}

        <textarea
          className="contact-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          rows={5}
        />

        <p className="char-count">{message.length} characters</p>

        {message.trim() && (
          <div className="live-preview">
            <p className="section-label">PREVIEW</p>
            <p>{message}</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Contact;