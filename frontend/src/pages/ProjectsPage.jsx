import { useState, useEffect } from "react";
import Projects from "../components/Projects";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RepoList from "../components/RepoList";

const GITHUB_USERNAME = "prachimehta07";

function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchRepos = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`
      );

      if (!response.ok) {
        throw new Error("GitHub API request failed");
      }

      const data = await response.json();
      setRepos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <Projects />

      <section className="section">
        <p className="section-label">04 / GITHUB REPOSITORIES</p>
        <h2>Live from GitHub</h2>

        {!loading && !error && (
          <input
            className="contact-input"
            type="text"
            placeholder="Search repositories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}

        {loading && <Spinner />}
        {error && <ErrorMessage message={error} onRetry={fetchRepos} />}
        {!loading && !error && <RepoList repos={filteredRepos} />}
      </section>
    </main>
  );
}

export default ProjectsPage;