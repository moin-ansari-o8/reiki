export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#5E3A87" }}>
        404 - Page Not Found
      </h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
