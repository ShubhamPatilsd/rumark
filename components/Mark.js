function parseTwitterDate(tdate) {
  var system_date = new Date(Date.parse(tdate));
  var user_date = new Date();
  var diff = Math.floor((user_date - system_date) / 1000);
  if (diff <= 1) {
    return "Just now";
  } else if (diff < 60) {
    return diff + " s";
  } else if (diff <= 3540) {
    return Math.round(diff / 60) + "m";
  } else if (diff <= 86400) {
    return Math.round(diff / 3600) + "h";
  } else if (diff < 604800) {
    return Math.round(diff / 86400) + "d";
  } else {
    return system_date.toLocaleDateString(undefined, { dateStyle: "medium" });
  }
}

export default function Mark({ username, message, date }) {
  return (
    <div
      style={{
        padding: "1.5rem",
        border: "2px solid #E2E8F0",
        background: "#FAFAFA",
        borderRadius: "15px",
        width: "auto",
      }}
    >
      <p style={{ display: "flex", alignItems: "center", margin: 0 }}>
        <p style={{ margin: 0 }}>
          <span style={{ fontWeight: "bold" }}>{username} · </span>
          <span style={{ color: "grey" }}>{parseTwitterDate(date)}</span>
        </p>
      </p>
      <p style={{ margin: 0 }}>{message}</p>
    </div>
  );
}
