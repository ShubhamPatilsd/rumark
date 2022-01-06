export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        position: "sticky",
        top: 0,
        width: "100%",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        background: "rgba( 255, 255, 255, 1)",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        borderRadius: "10px",
        marginBottom: "2.3rem",
      }}
    >
      <a href="/">
        <h2 style={{ margin: 0 }}>📝 RuMark</h2>
      </a>
      <a href="/add">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "1rem",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "1.5rem", width: "1.5rem" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p style={{ marginLeft: "0.3rem" }}>Add</p>
        </div>
      </a>
    </div>
  );
}
