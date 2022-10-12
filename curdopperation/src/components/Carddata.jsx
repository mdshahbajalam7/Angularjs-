import axios from "axios";
import React from "react";
// import { IconName } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../App";
import styles from "../components/data.module.css";
import Editpage from "./Editpage";

function Carddata({
  name,
  id,
  age,
  gender,
  email,
  MobileNumber,
  Developer,
  Salary,
}) {
  const navigate = useNavigate();
  const deleteempolyess = (id) => {
    axios
      .delete(`${BaseUrl}/emplyes_Details/${id}`)
      .then(({ data }) => {
        // window.reload(navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Editpage = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className={styles.carddata}>
      <h4>
        <span style={{ color: "Teal" }}>Name</span> :- {name}
      </h4>
      <h4>
        <span style={{ color: "Teal" }}>Age</span> :- {age}
      </h4>
      <h4>
        <span style={{ color: "Teal" }}>Male</span> :- {gender}
      </h4>
      <h4>
        <span style={{ color: "Teal" }}>Email</span> :- {email}
      </h4>
      <h4>
        <span style={{ color: "Teal" }}>Mobile Number</span> :- {MobileNumber}
      </h4>
      <h4>
        <span style={{ color: "Teal" }}>Developer</span> :- {Developer}
      </h4>
      <h4>
        <span style={{ color: "Teal" }}>Salary</span> :- {Salary}
      </h4>
      <button className={styles.btn1} onClick={() => Editpage(id)}>
        Edit
      </button>
      {/* <BsFillTrashFill/> */}
      <button className={styles.btn1} onClick={() => deleteempolyess(id)}>
        Delete
      </button>
    </div>
  );
}

export default Carddata;
