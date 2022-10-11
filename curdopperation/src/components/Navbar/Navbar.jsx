import React from "react";
import { Link } from "react-router-dom";
import styles from "../Navbar/Navber.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <h3>
        <span style={{ color: "red" }}>C</span>urd{" "}
        <span style={{ color: "green" }}>O</span>peration
      </h3>
      <div className={styles.innercontainer}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/">
          About
        </Link>
        <Link className={styles.link} to="/empolyes">
          Empolyes
        </Link>
        <Link className={styles.link} to="/">
          Login
        </Link>
        <Link className={styles.link} to="/">
          Service
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
