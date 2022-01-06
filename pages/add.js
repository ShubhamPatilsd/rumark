import axios from "axios";
import Navbar from "../components/Navbar";

export default function Add() {
  function addMark(event) {
    event.preventDefault();
    const username = event.target.name.value;
    const message = event.target.message.value;

    axios({
      url: "/api/add",
      method: "POST",
      data: {
        username: username,
        mark_data: message,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Navbar />

      <div style={{ marginTop: "2.3rem" }}>
        <h1 style={{ textAlign: "center" }}>Add your Mark ✍</h1>
        <form
          style={{ display: "flex", justifyContent: "center" }}
          onSubmit={addMark}
        >
          <div>
            <div>
              <label htmlFor="name" style={{ fontWeight: "bold" }}>
                Name (this shows up on the board)
              </label>
              <input
                name="name"
                type="text"
                style={{
                  display: "block",
                  borderRadius: "5px",
                  padding: "0.4rem",
                  fontFamily: "Inter",
                  border: "2px solid #4F46E5",
                  marginTop: "0.4rem",
                  fontSize: "0.9em",
                  width: "100%",
                }}
                placeholder="ex: John Doe"
                autoComplete="off"
              />
            </div>
            <div style={{ marginTop: "1rem" }}>
              <label htmlFor="message" style={{ fontWeight: "bold" }}>
                Your message to the world (will be shown publicly)
              </label>
              <input
                name="message"
                type="text"
                style={{
                  display: "block",
                  borderRadius: "5px",
                  padding: "0.4rem",
                  fontFamily: "Inter",
                  border: "2px solid #4F46E5",
                  marginTop: "0.4rem",
                  fontSize: "0.9em",
                  width: "100%",
                }}
                placeholder="ex: 2021 was such a crazy year"
                autoComplete="off"
              />
            </div>
            <input
              type="submit"
              value="Add Mark"
              style={{
                borderRadius: "5px",
                border: 0,
                padding: "0.8rem",
                background: "#4F46E5",
                color: "white",
                fontFamily: "Inter",
                fontWeight: "bold",
                fontSize: "1.2em",
                cursor: "pointer",
                marginTop: "0.5rem",
                width: "100%",
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
}
