import axios from "axios";
import React from "react";
import { IconName } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../components/data.module.css";

function Carddata({
  name,
  id,
  age,
  gender,
  email,
  MobileNumber,
  Developer,
  Salari,
}) {
  
    const navigate = useNavigate()
    const deleteempolyess = (id) => {
    axios
      .delete(`http://localhost:8080/emplyes_Details/${id}`)
      .then(({ data }) => {
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
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
        <span style={{ color: "Teal" }}>Salari</span> :- {Salari}
      </h4>
      <button className={styles.btn1}>Edit</button>
      {/* <BsFillTrashFill/> */}
      <button className={styles.btn1} onClick={()=>deleteempolyess(id)}>
        Delete
      </button>
    </div>
  );
}

export default Carddata;
