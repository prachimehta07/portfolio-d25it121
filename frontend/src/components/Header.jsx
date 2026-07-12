function Header({ name, role, themeColor }) {
  return (
    <header
      className="header"
      style={{ borderTop: `4px solid ${themeColor}` }}
    >
      <p className="eyebrow">PORTFOLIO / 2026</p>

      <h1>{name}</h1>
      <h2>{role}</h2>

      <p className="hero-text">
        I like building systems that make decisions.
        Sometimes that means designing backend architecture.
        Sometimes it means experimenting with AI.
      </p>
    </header>
  );
}

export default Header;