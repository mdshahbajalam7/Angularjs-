import { TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { BaseUrl } from "../App";
import styles from "../components/data.module.css";

function Editpage() {
  // const [Data,setdata]=useState({})
  const [name, setname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [MobileNumber, setMobileNumber] = useState("");
  const [Developer, setDeveloper] = useState("");
  const [Salary, setSalary] = useState("");
  const { id } = useParams();
//   console.log(id);
const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${BaseUrl}/emplyes_Details`)
      .then(({ data }) => {
        console.log(data);
        let filterdata = data.filter((elem) => elem.id == id);
        // setdata(filterdata[0])
        setname(filterdata[0].name);
        setAge(filterdata[0].age);
        setGender(filterdata[0].gender);
        setEmail(filterdata[0].email);
        setMobileNumber(filterdata[0].MobileNumber);
        setDeveloper(filterdata[0].Developer);
        setSalary(filterdata[0].Salary);
        console.log("filterdata", filterdata[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    const editdata = {
      name,
      Developer,
      MobileNumber,
      Salary,
      age,
      email,
      gender,
    };

    axios
      .put(`${BaseUrl}/emplyes_Details/${id}`, editdata)
      .then(({ data }) => {
        console.log("data", data);
        setTimeout(() => {
            navigate("/")
        }, 5000);
        toast.success("Empilyes details update sucessfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handlesubmit}>
        <div className={styles.textField}>
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            id="outlined-basic"
            name="name"
            value={name}
            label="Name"
            required
            variant="outlined"
            onChange={(e) => setname(e.target.value)}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            type="number"
            id="outlined-basic"
            label="Age"
            name="age"
            value={age}
            required
            variant="outlined"
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            id="outlined-basic"
            label="Gender"
            name="gender"
            value={gender}
            variant="outlined"
            required
            onChange={(e) => setGender(e.target.value)}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            id="outlined-basic"
            label="Email"
            name="email"
            value={email}
            variant="outlined"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            type="number"
            id="outlined-basic"
            label="Mobile Number"
            name="MobileNumber"
            value={MobileNumber}
            required
            variant="outlined"
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            id="outlined-basic"
            label="Developer"
            name="Developer"
            value={Developer}
            required
            variant="outlined"
            onChange={(e) => setDeveloper(e.target.value)}
          />
          <br />
          <TextField
            style={{ marginTop: "10px", width: "100%" }}
            type="number"
            id="outlined-basic"
            label="Salary"
            value={Salary}
            required
            name="Salary"
            variant="outlined"
            onChange={(e) => setSalary(e.target.value)}
          />
          <br />
          <input className={styles.btn} type="submit" value="submit" />
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Editpage;
