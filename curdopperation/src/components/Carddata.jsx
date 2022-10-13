import axios from "axios";
import React from "react";
import { IconName, BiTrash, BiEditAlt } from "react-icons/bi";
// import { IconName } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { BaseUrl } from "../App";
import styles from "../components/data.module.css";

function Carddata({
  name,
  id,
  age,
  gender,
  email,
  MobileNumber,
  Developer,
  Salary,
  getDataget,
}) {
  const navigate = useNavigate();
  const deleteempolyess = (id) => {
    axios
      .delete(`${BaseUrl}/emplyes_Details/${id}`)
      .then(({ data }) => {
        console.log(data);
        setTimeout(() => {
          getDataget();
        }, 5000);
        toast.error("Empolyess Details Delete successfully !", {
          position: toast.POSITION.TOP_CENTER,
        });
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
        <h1>
          <BiEditAlt />
        </h1>
      </button>
      <button className={styles.btn1} onClick={() => deleteempolyess(id)}>
        <h1>
          <BiTrash />
        </h1>
      </button>
      <ToastContainer />
    </div>
  );
}

export default Carddata;
