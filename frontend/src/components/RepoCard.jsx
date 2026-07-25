function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="repo-card"
    >
      <h3>{repo.name}</h3>
      <p>★ {repo.stargazers_count}</p>
    </a>
  );
}

export default RepoCard;