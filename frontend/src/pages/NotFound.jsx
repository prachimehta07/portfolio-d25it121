import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <section className="section">
        <p className="section-label">404</p>
        <h2>Page Not Found</h2>
        <p className="section-text">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/">Back to Home</Link>
      </section>
    </main>
  );
}

export default NotFound;