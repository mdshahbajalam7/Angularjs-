import React from "react";
import { useState } from "react";

function DarkMood() {
  const [mystyle, setMystyle] = useState({
    color: "white",
    backgroundColor: "black",
    border: "2px solid red",
  });
  const [btmtext, setBtnText] = useState("Enable Light Mood");
  const toggletheme = () => {
    // alert("hi")
    if (mystyle.color === "white") {
      setMystyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mood");
    } else {
      setMystyle({
        color: "white",
        backgroundColor: "black",
        border: "2px solid red",
      });
      setBtnText("Enable light Mood");
    }
  };

  return (
    <>
      <div style={mystyle}>
        <header
          style={{
            display: "flex",
            //   border: "1px solid",
            justifyContent: "space-between",
            padding: "10px ",
          }}
        >
          <h1 style={{ marginLeft: "100px" }}>DarkMood</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
              marginRight: "100px",
            }}
          >
            <h4 style={{ marginTop: "px" }}>Home</h4>
            <h4 style={{ marginTop: "px" }}>About</h4>
            <h4 style={{ marginTop: "px" }}>Services</h4>
          </div>
        </header>

        <main style={{ marginTop: "50px" }}>
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              // border: "1px solid",
              gap: "20px",
            }}
          >
            <div style={{ width: "50%", padding: "30px" }}>
              <h1 style={{ width: "50%", margin: "auto", color: "tomato" }}>
                React Dark Mood
              </h1>
              <p style={{ width: "50%", margin: "auto", fontSize: "20px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                laboriosam ut hic nobis ab excepturi assumenda provident neque
                eligendi, esse aliquam accusamus labore incidunt beatae
                quibusdam ipsa! Velit, a eum!
              </p>
              <button
                style={{
                  marginTop: "10px",
                  width: "20%",
                  height: "30px",
                  borderRadius: "10px",
                }}
                onClick={toggletheme}
              >
                {btmtext}
              </button>
            </div>
            <div style={{ width: "50%" }}>
              <img
                style={{ width: "300px", height: "300px" }}
                src="https://images.unsplash.com/photo-1665323759004-43c9f3b941dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default DarkMood;
