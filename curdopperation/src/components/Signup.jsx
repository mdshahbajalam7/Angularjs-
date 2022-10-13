import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import styles from "../components/data.module.css";

function Signup() {
  const [form, setForm] = useState({});
  const handlechange = (e) => {
    const InputName = e.target.name;
    setForm({
      ...form,
      [InputName]: e.target.value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className={styles.textField}>
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            id="outlined-basic"
            name="name"
            label="Name"
            required
            variant="outlined"
            onChange={handlechange}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            id="outlined-basic"
            label="Email"
            name="email"
            required
            variant="outlined"
            onChange={handlechange}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            id="outlined-basic"
            label="UserName"
            name="username"
            variant="outlined"
            required
            onChange={handlechange}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            id="outlined-basic"
            label="Password"
            name="password"
            variant="outlined"
            required
            onChange={handlechange}
          />
          <br />
          <input className={styles.btn} type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}

export default Signup;
