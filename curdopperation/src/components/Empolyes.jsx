import React from "react";
import TextField from "@mui/material/TextField";
import styles from "../components/data.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BaseUrl } from "../App";

function Empolyes() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handlechange = (e) => {
    const InputName = e.target.name;
    setForm({
      ...form,
      [InputName]: e.target.value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("formdata", form);
    axios
      .post(`${BaseUrl}/emplyes_Details`, form)
      .then(({ data }) => {
        setTimeout(() => {
          navigate("/");
        }, 5000);
        toast.success("Empilyes details create sucessfully");
        console.log(data);
      })
      .catch((err) => console.log(err));
    navigate("/");
  };

  return (
    <div className={styles.container}>
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
            type="number"
            id="outlined-basic"
            label="Age"
            name="age"
            required
            variant="outlined"
            onChange={handlechange}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            id="outlined-basic"
            label="Gender"
            name="gender"
            variant="outlined"
            required
            onChange={handlechange}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            id="outlined-basic"
            label="Email"
            name="email"
            variant="outlined"
            required
            onChange={handlechange}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            type="number"
            id="outlined-basic"
            label="Mobile Number"
            name="MobileNumber"
            required
            variant="outlined"
            onChange={handlechange}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            id="outlined-basic"
            label="Developer"
            name="Developer"
            required
            variant="outlined"
            onChange={handlechange}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            type="number"
            id="outlined-basic"
            label="Salari"
            required
            name="Salari"
            variant="outlined"
            onChange={handlechange}
          />
          <br />
          <input className={styles.btn} type="submit" value="submit" />
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Empolyes;
